import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const TeamMembers = props => {
  const setMemberToEdit = props.setMemberToEdit
  return (
    <Card.Group>
      {props.teamMemberArray.map((member, index) => (
        <Card key={index}>
          <Card.Content>
            <Button floated='right' onClick={e => setMemberToEdit(member)}>
              Edit
            </Button>
            <Card.Header>{`${member.fname} ${member.lname}`}</Card.Header>
            <Card.Meta>{member.role}</Card.Meta>
            <Card.Description>{member.email}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}
export default TeamMembers
