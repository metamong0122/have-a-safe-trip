import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const onClick = (country) => {
    navigate(`/${country}`);
  };

  return (
    <div>
      <MenuSection>
          <MenuBar>홈</MenuBar>
          <MenuBar onClick={() => onClick('spain')}>스페인</MenuBar>
          <MenuBar onClick={() => onClick('egypt')}>이집트</MenuBar>
          <MenuBar onClick={() => onClick('japan')}>일본</MenuBar>
          <MenuBar onClick={() => onClick('usa')}>미국</MenuBar>
          <MenuBar onClick={() => onClick('argentina')}>아르헨티나</MenuBar>
        </MenuSection>
      <Header>
        <h1 style={{color: 'white'}}>Have A Safe Trip</h1>
      </Header>
      <Container>
        <MainSection>
          <img src={require('./assets/map.png')} alt='map' style={{position: 'absolute', width: '78%'}}></img>
          <Marker onClick={() => onClick('spain')} top="38%" left="4%" />
          <Marker onClick={() => onClick('cairo')} top="45%" left="12%" />
          <Marker onClick={() => onClick('japan')} top="40%" left="35%" />
          <Marker onClick={() => onClick('argentina')} top="70%" left="69%" />
          <Marker onClick={() => onClick('usa')} top="38%" left="60%" />
        </MainSection>
        <RightSection>
          <CountrySection>
            <img src={require('./assets/japan-main.png')} alt='sakura' style={{width: '100%', borderRadius: 5}} />
            <Button onClick={() => window.open('https://www.japan.travel/ko/kr/')}>일본에 대해 알아보기</Button>
          </CountrySection>
          <CountrySection style={{marginTop: 10}}>
            <img src={require('./assets/egypt-main.jpeg')} alt='sakura' style={{width: '100%', borderRadius: 5}} />
            <Button onClick={() => window.open('https://www.experienceegypt.eg/en')}>이집트에 대해 알아보기</Button>
          </CountrySection>
        </RightSection>
      </Container>
      <BottomSection>
        <CountrySection style={{width: '33%'}}>
          <img src={require('./assets/us-main.jpeg')} alt='sakura' style={{width: '100%', borderRadius: 5}} />
          <Button onClick={() => window.open('https://www.gousa.or.kr/')}>미국에 대해 알아보기</Button>
        </CountrySection>
        <CountrySection style={{width: '33%', marginLeft: 10}}>
          <img src={require('./assets/argentina-main.jpeg')} alt='sakura' style={{width: '100%', borderRadius: 5}} />
          <Button onClick={() => window.open('https://www.argentina.gob.ar/turismoydeportes')}>아르헨티나에 대해 알아보기</Button>
        </CountrySection>
        <CountrySection style={{width: '33%', marginLeft: 10}}>
          <img src={require('./assets/spain-main.jpeg')} alt='sakura' style={{width: '100%', borderRadius: 5}} />
          <Button onClick={() => window.open('https://www.spain.info/')}>스페인에 대해 알아보기</Button>
        </CountrySection>
      </BottomSection>
    </div>
  );
};

const Marker = styled.img.attrs(() => ({
  src: require('./assets/marker.png'),
  alt: 'marker'
}))`
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
`
const MenuSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 30px;
`
const MenuBar = styled.div`
  cursor: pointer;
  border-bottom: 1px solid white;
  margin: 0 5px;
  padding: 10px;
  color: white;
`
const Header = styled.div`
  display: flex;
  padding: 10px;
  background: #c3acd0;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  margin-bottom: 10px;
`
const MainSection = styled.div`
  padding: 10px;
  width: 80%;
  flex: 4;
`
const RightSection = styled.div`
  flex: 1;
  padding: 10px;
`
const BottomSection = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: row;
`
const CountrySection = styled.div`
  width: 300px;
`
const Button = styled.div`
  border-radius: 8px;
  border: 2px solid #c3acd0;
  align-items: center;
  justify-content: center;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
`
export default Home;
