

import DashboardContent from './DashboardContent/DasboardContent';
import LeftNavigation from './LeftNavigation/LeftNavigation';

import style from './Dashboard.module.css';
import { useLocation } from 'react-router';

const Dashboard = () => {

    const location = useLocation();
    var content = location.pathname.split('/')[2].toString();
  
    return (
        <div className={style.container}>
            <LeftNavigation />
            <DashboardContent dashboardContent={content}/>
        </div>
    );
}
 
export default Dashboard;