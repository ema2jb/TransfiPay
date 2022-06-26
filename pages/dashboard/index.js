import Layout from "../../Components/dashboard/Layout";
import Home from "../../Components/dashboard/Home";
import Transactions from "../../Components/dashboard/Transactions"

const Dashboard = ()=>{
    return<>
        <div>
            <Layout>
                <Home />
                <Transactions />
            </Layout>
        </div>
    </>
}

export default Dashboard