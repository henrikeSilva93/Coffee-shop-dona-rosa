export default function Footer(){
    const styles = {
        height:'10vh',
        backgroundColor:'#663300',
        color:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    return(
        <div className="container-fluid" style={styles}>
            <div>
                <p className="h5">Cofee Shop Tia Rosa</p>
                <p>&copy; Aquila Henrique 2024</p>
            </div>
        </div>
    );
}