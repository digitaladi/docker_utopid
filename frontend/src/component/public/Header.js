import Title from "./Title"






const Header = ({children}) =>{


    return (
        <div className="header">

            <div className="accroche_title">

            <Title />
                <h2>Donner vie à votre plante ! </h2>
            </div>

            <div>
                {children}
            </div>

        </div>
    )


}


export default Header