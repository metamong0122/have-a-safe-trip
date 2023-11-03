import data from './data';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from "styled-components";

function Country() {
  const [countryInfo, setCountryInfo] = useState(
    { 
      continent: '',
      name: '', 
      period: {
        city: '',
        month: '',
        description: ''
      },
      plane: {
        src: '',
        dst: '',
        time: '',
        price: ''
      },
      visa: {
        period: '',
        description: ''
      },
      currency: {
        money: '',
        description: ''
      },
      volt: '',
      language: {
        primary: '',
        description: ''
      },
      timeDifference: '',
      price: {
        common: '',
        description: ''
      },
      culture: '',
      medical: '',
      danger: {
        summary: '',
        places: '',
        accidents: '',
        crimeReport: '',
        emergency: ''
      }
    }
  );
  const [tab, setTab] = useState(0);
  const [pressed, setPressed] = useState(false);
  const { country } = useParams();
  const navigate = useNavigate();
  const getData = () => {
    if (country === 'spain') {
      setCountryInfo(data[0])
    } else if (country === 'egypt') {
      setCountryInfo(data[1])
    } else if (country === 'japan') {
      setCountryInfo(data[2])
    } else if (country === 'argentina') {
      setCountryInfo(data[3])
    } else if (country === 'usa') {
      setCountryInfo(data[4])
    }
  }


  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])
  
  return (
    <>
      <Header image={countryInfo.image}>
        <MenuSection>
          <MenuBar pressed={pressed} onClick={() => {setPressed(true); navigate('/');}} >홈</MenuBar>
          <MenuBar pressed={tab === 0} onClick={() => setTab(0)}>여행 정보</MenuBar>
          <MenuBar pressed={tab === 1} onClick={() => setTab(1)}>위험 정보</MenuBar>
        </MenuSection>
        <CountrySection>
          <h1>{countryInfo.continent}</h1>
          <h2 style={{marginLeft: 10}}>{countryInfo.name}</h2>
        </CountrySection>
      </Header>
      { tab === 0 ? (
        <>
          <PeriodSection>
            <h4>❗️추천 여행 기간</h4>
            <p>
              기준 도시 {countryInfo.period.city}
              <br></br>
              추천 기간 {countryInfo.period.month}
              <br></br>
              {countryInfo.period.description}
            </p>
          </PeriodSection>
          <Container>
            <LeftContainer>
              <PlaneSection>
                <h4>🛫 항공</h4>
                <p>
                  {countryInfo.plane.src} -> {countryInfo.plane.dst}
                  <br></br>
                  소요 시간 {countryInfo.plane.time}
                  평균 가격 {countryInfo.plane.price}
                </p>
              </PlaneSection>
              <VisaSection>
                <h4>비자</h4>
                <p>
                  정보 {countryInfo.visa.period}
                  <br></br>
                  {countryInfo.visa.description}
                </p>
              </VisaSection>
              <CurrencySection>
                <h4>💱 환율</h4>
                <p>
                  정보 {countryInfo.currency.money}
                  <br></br>
                  {countryInfo.currency.description}
                </p>
              </CurrencySection>
            </LeftContainer>
            <MiddleContainer>
              <VoltSection>
                <h4>⚡︎전압</h4>
                {countryInfo.volt}
              </VoltSection>
              <LanguageSection>
                <h4>🗣️언어</h4>
                <p>
                  {countryInfo.language.primary}
                  <br></br>
                  {countryInfo.language.description}
                </p>
              </LanguageSection>
              <TimeSection>
                <h4>🕐시차</h4>
                <p>{countryInfo.timeDifference}</p>
              </TimeSection>
              <PriceSection>
                <h4>💰물가</h4>
                <p>
                  {countryInfo.price.common}
                  <br></br>
                  {countryInfo.price.description}
                </p>
              </PriceSection>
            </MiddleContainer>
            <RightContainer>
              <CultureSection>
                <h4>🌎문화</h4>
                <p>
                  {countryInfo.culture}
                </p>
              </CultureSection>
              <MedicalSection>
                <h4>🏥의료 관련</h4>
                <p>{countryInfo.medical}</p>
              </MedicalSection>
            </RightContainer>
          </Container>
        </>
      ) : (
        <Container style={{marginTop: 10}}>
          <DangerSection>
            <h3>위험 정보</h3>
            <p>{countryInfo.danger.summary}</p>
            <h4>특히 주의해야 할 곳</h4>
            <p>{countryInfo.danger.places}</p>
            <h4>사고</h4>
            <p>{countryInfo.danger.accidents}</p>
          </DangerSection>
          <ReportSection>
            <h4>{countryInfo.danger.crimeReport}</h4>
            <h4>{countryInfo.danger.emergency}</h4>
          </ReportSection>
        </Container>
      )}
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10px;
`

const LeftContainer = styled.div`
  flex: 1;
  padding-right: 5px;
`

const MiddleContainer = styled.div`
  flex: 1;
  padding: 0 5px;
`

const RightContainer = styled.div`
  flex: 1;
  padding-left: 5px;
`

const CountrySection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const PeriodSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin: 10px;
`

const PlaneSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
`

const VisaSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const CurrencySection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const VoltSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
`

const LanguageSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const TimeSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const PriceSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const CultureSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
`

const MedicalSection = styled.div`
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-top: 10px;
`

const DangerSection = styled.div`
  flex: 2;
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
`

const ReportSection = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #ffc0cb;
  border-radius: 12px;
  margin-left: 10px;
`

const MenuSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 25px;
`

const MenuBar = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.pressed ? '#ffc0cb' : 'transparent'};
  padding: 10px;
`

export default Country;
