import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'f', text: 'Frontend Engineer', value: 'Frontend Engineer' },
  { key: 'b', text: 'Backend Engineer', value: 'Backend Engineer' },
  { key: 'd', text: 'Designer', value: 'Designer' },
]

const FormComponent = props => {
  const teamMemberArray = props.teamMemberArray
  const setTeamMemberArray = props.setTeamMemberArray
  const memberToEdit = props.memberToEdit
  const editMember = props.editMember
  const [teamMember, setTeamMember] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
    id: '',
  })
  const handleSubmit = e => {
    e.preventDefault()
    Object.keys(memberToEdit).length
      ? editMember(teamMember)
      : setTeamMemberArray([
          ...teamMemberArray,
          { ...teamMember, id: teamMemberArray.length },
        ])
    setTeamMember({
      fname: '',
      lname: '',
      email: '',
      role: '',
      id: '',
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
  useEffect(() => {
    setTeamMember(memberToEdit)
  }, [memberToEdit])

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
      <Form.Button primary>Submit</Form.Button>
    </Form>
  )
}

export default FormComponent
