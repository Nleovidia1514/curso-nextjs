import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border: 3px solid black;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`

export const Section = styled.section`
  padding: 10px;
  background-color: lightgray;
  font-size: 20px;
  font-weight: 200;
`

export const SectionName = styled.div`
  display: inline-block;
  width: 80%;
`

export const SectionPrice = styled.div`
  display: inline-block;
  width: 20%;
  color: green;
`
