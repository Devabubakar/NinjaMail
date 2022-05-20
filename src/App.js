import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Skeleton from './components/skeleton/skeleton';
import ErrorBoundary from './components/ErrorHandling/error';


const Landing = lazy(() => import('./pages/landing'))
function App() {
  return (
    <ErrorBoundary> 
     <Router >
       <Suspense fallback={<Skeleton />}>
         <Routes>
           <Route index path='/' element={<Landing />} />
         </Routes>
       </Suspense>
     </Router>
    </ErrorBoundary>
   
  );
}

export default App;
