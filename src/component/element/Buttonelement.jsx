import Button from 'react-bootstrap/Button';
export default function Buttonelement(props) {
    return (
        <Button id={props.id} className="buttonelement" variant="primary" style={{ 
            fontWeight: props.fw,
            borderRadius: props.br ? props.br : '4px',
            fontFamily: 'Roboto'
        }}>
            {props.content}{props.arrow && <span style={{color:'white', marginLeft:'5px'}} className="material-symbols-outlined">arrow_forward</span>}
        </Button>
    );
}

//usage example <Buttonelement fw={400} br={"10px"} arrow={"True"} content={"Selengkapnya"}/>