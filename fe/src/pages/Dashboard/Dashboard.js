

import DashboardContent from './DashboardContent/DasboardContent';
import LeftNavigation from './LeftNavigation/LeftNavigation';

import style from './Dashboard.module.css';
import { useLocation } from 'react-router';

const Dashboard = () => {

    const location = useLocation();
    console.log(location);

  
    return (
        <div className={style.container}>
            <LeftNavigation />
            <DashboardContent/>
        </div>
    );
}
 
export default Dashboard;