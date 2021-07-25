import { Button, Card, Classes, H5 } from '@blueprintjs/core'
import React from 'react'
import Wrapper from '../../Components/layout/styled';


interface IProps{
}

const Help : React.FC<IProps> = props => {

    return(
        <Wrapper>
                <Card>
                    <H5>
                        <a href="#">Help with applications</a>
                    </H5>
                    <p>
                        User interfaces that enable people to interact smoothly with data, ask better questions, and
                        make better decisions.
                    </p>
                    <Button text="Email For Help" className={Classes.BUTTON} />
                </Card>
        </Wrapper>
    )
}

export default Help;