import Loading from "./loading";


const TeamPage = () => {
    const loading = true 
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="border-green-600 border p-10">
            <h2>This is team page</h2>
        </div>
    );
};

export default TeamPage;