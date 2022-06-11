import React from 'react'
import styled from 'styled-components'
import profileImg from '../../assets/images/profileimg.png'

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProfileImg = styled.img`
  height: 5rem;
  border-radius: 50%;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor}
`
 
const Profile = () => {
  return (
    <Container>
        <ProfileImg src={profileImg}/>
        <ProfileName>Sharath Kumar</ProfileName>
    </Container>
  )
}

export default Profile