import React from  'react'
import './STYLE_CREATE_DAILY_REPORT.css'
import { Button, Divider, Form, TextArea, Icon, Input} from 'semantic-ui-react'

 export default function CREATE_DAILY_REPORT() {
  return (
    <div className= 'flexbox'>
      <div className='button_back' >
       <Icon link name='arrow left' size='big' />
      </div>
      <div className='primary'>
        <h1 className='font'>Create a New Daily Report</h1>
      </div>
      {
        <div className='box'>
            <h1 className='text2'>Date: </h1>
                <div className='date_input'>
                    <Input floated='left' placeholder='' />
                  </div>
                {/* <Form>
                  <TextArea placeholder=''} />
                </Form> */}
                <Divider vertical hidden></Divider>
            <h2 className='text3'>Progress:</h2>
                <Form>
                  <TextArea placeholder='' />
                </Form>
            <h3 className='text' >Problem/s:</h3> 
                <Form>
                  <TextArea placeholder='' />
                </Form>
            <h4 className='text'>Learnings/Realizations: </h4>
                <Form>
                   <TextArea placeholder='' />
                </Form>
            <h5 className='text'>Next Meeting's Plan:</h5>
                <Form>
                   <TextArea placeholder='' />
                </Form>
                    <div className='button_submit'>
                        <Button floated='right'className='button_font' >Submit</Button>
                    </div>
        </div>
      }
    </div>
  )
 }
