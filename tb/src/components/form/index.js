import React from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'f', text: 'Frontend Engineer', value: 'Frontend Engineer' },
  { key: 'b', text: 'Backend Engineer', value: 'Backend Engineer' },
  { key: 'd', text: 'Designer', value: 'Designer' },
]

const FormComponent = props => {
  const setTeamMember = props.setTeamMember
  const teamMember = props.teamMember
  const teamMemberArray = props.teamMemberArray
  const setTeamMemberArray = props.setTeamMemberArray

  const handleSubmit = event => {
    event.preventDefault()
    setTeamMemberArray([...teamMemberArray, teamMember])
    setTeamMember({
      fname: '',
      lname: '',
      email: '',
      role: '',
    })
  }

  const handleChange = e =>
    setTeamMember(
      e.target.textContent === 'Frontend Engineer' ||
        e.target.textContent === 'Backend Engineer' ||
        e.target.textContent === 'Designer'
        ? {
            ...teamMember,
            role: e.target.textContent,
          }
        : {
            ...teamMember,
            [e.target.name]: e.target.value,
          }
    )

  console.log(teamMember)
  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Form.Group widths='equal'>
        <Form.Input
          name='fname'
          onChange={handleChange}
          value={teamMember.fname}
          fluid
          label='First name'
          placeholder='First name'
        />
        <Form.Input
          name='lname'
          onChange={handleChange}
          value={teamMember.lname}
          fluid
          label='Last name'
          placeholder='Last name'
        />
        <Form.Select
          options={options}
          onChange={handleChange}
          value={teamMember.role}
          fluid
          label='Role'
          placeholder='Role'
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          name='email'
          onChange={handleChange}
          value={teamMember.email}
          fluid
          label='Email'
          placeholder='Email Address'
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

export default FormComponent
