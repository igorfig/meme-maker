import React, { useState, useEffect } from 'react';
import qs from 'qs';

import logo from '../../image/logo.svg'
import { Wrapper, Card, Templates, Form, Button } from './styles';
export default function Home() {
  const [ templates, setTemplates ] = useState([]);
  const [ selectedTemplate, setSelectedTemplate ] = useState(null);
  const [ boxes, setBoxes ] = useState([])
  const [ generatedMeme, setGeneratedMeme ] = useState(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.imgflip.com/get_memes');
      const { data: { memes } } = await resp.json()
      setTemplates(memes);
    })()
  }, [])
 
  function handleSelectTemplate(template) {
    selectedTemplate?.id === template.id ? setSelectedTemplate(null) : setSelectedTemplate(template)
    setBoxes([])
  }

  const handleInputChange = (index) => (event) => {
    const newValues = boxes;
    newValues[index] = event.target.value;
    setBoxes(newValues)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const params = qs.stringify({
      template_id: selectedTemplate.id,
      username: 'vikayel543',
      password: 'vikayel543',
      boxes: boxes.map(text => ({ text }))
    })

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
    const { data: { url } } = await resp.json();

    setGeneratedMeme(url);
  }

  function handleReset() {
    setSelectedTemplate(null);
    setBoxes([]);
    setGeneratedMeme(null)
  }

  return (
    <Wrapper>
      <img src={logo} alt="logo Meme Maker" />
      <Card>
        { generatedMeme && (
          <>
            <img src={generatedMeme} alt={selectedTemplate.name} />
            <Button type="button" onClick={handleReset}>Criar outro meme</Button>
          </>
        ) }

       { !generatedMeme && (
         <>
          <h2>Selecione um template</h2>

        <Templates>
          { templates.map(template => (
            <button 
              type="button"
              key={template.id}
              onClick={() => handleSelectTemplate(template)}
              className={template.id === selectedTemplate?.id ? 'selected' : ''}
            >
              <img src={template.url} alt={template.name} />
            </button>
          )) }
        </Templates>

        { selectedTemplate && (
          <Form onSubmit={handleSubmit}>
            {new Array(selectedTemplate?.box_count).fill('').map((_, index) => (
              <input 
                required
                key={index}
                placeholder={`Texto #${index + 1}`} 
                onChange={handleInputChange(index)}
                />
            ))}
            <Button type="submit">MakeMyMeme!</Button>
        </Form>
        ) }
         </>
       ) }
      </Card>
    </Wrapper>
  )
}