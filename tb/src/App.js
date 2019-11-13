import React, { useState } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import Form from './components/form/'
import TeamMembers from './components/teamMembers'

function App() {
  const [teamMemberArray, setTeamMemberArray] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})

  const editMember = member => {
    const newTeamArray = teamMemberArray.filter(
      change => change.id !== member.id
    )
    setTeamMemberArray([...newTeamArray, member])
    setMemberToEdit({})
  }
  return (
    <Container className='app'>
      <Segment padded='very'>
        <Header as='h1'>Developer Team</Header>
        <Form
          teamMemberArray={teamMemberArray}
          setTeamMemberArray={setTeamMemberArray}
          memberToEdit={memberToEdit}
          editMember={editMember}
        />
        <Container className='theTeam'>
          <TeamMembers
            teamMemberArray={teamMemberArray}
            setMemberToEdit={setMemberToEdit}
          />
        </Container>
      </Segment>
    </Container>
  )
}

export default App
