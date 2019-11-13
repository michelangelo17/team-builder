import React, { useState } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import Form from './components/form/'
import TeamMembers from './components/teamMembers'

function App() {
  const [teamMemberArray, setTeamMemberArray] = useState([])
  console.log(teamMemberArray)
  const [teamMember, setTeamMember] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  })

  return (
    <Container className='app'>
      <Segment padded='very'>
        <Header as='h1'>Developer Team</Header>
        <Form
          teamMember={teamMember}
          setTeamMember={setTeamMember}
          teamMemberArray={teamMemberArray}
          setTeamMemberArray={setTeamMemberArray}
        />
        <Container className='theTeam'>
          <TeamMembers teamMemberArray={teamMemberArray} />
        </Container>
      </Segment>
    </Container>
  )
}

export default App
