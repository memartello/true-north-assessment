import React,{useRef} from 'react';
import TaskPage from './components/pages/tasks/TaskPage';
import { LinearProgress } from '@mui/material';
import { EventAlert } from './components/commons/EventAlert';
import { TNHeader, TitleText, Main, Container } from './components/commons/StyledComponents';
import { useAxiosLoader } from './components/hooks/useAxiosLoader';


const App = () => {
  const containerRef = useRef(null);
  const [loading] = useAxiosLoader();
  return (
    <Main ref={containerRef}>      
      <EventAlert ref={containerRef} />
      {/* only shows when fetchApi is fetching */}
      { loading && <LinearProgress />}
      <TNHeader>
        <TitleText>True north - assesment</TitleText>
      </TNHeader> 
      <Container> 
        <TaskPage />
      </Container>
    </Main>
  );
}

export default App;
