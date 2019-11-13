import React from 'react'
import { Card } from 'semantic-ui-react'

const TeamMembers = props => (
  <Card.Group
    items={props.teamMemberArray.map(member => {
      return {
        header: `${member.fname} ${member.lname}`,
        description: member.email,
        meta: member.role,
      }
    })}
  />
)

export default TeamMembers
