import React from 'react';
import  {BrowserRouter} from "react-router-dom"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from "./components/Header";

const packageJson = require('../package.json');


const generateClassName = createGenerateClassName({
    productionPrefix: packageJson.name
})

export default () => {
  return(
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header/>
                <MarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
  );
};

///asdfasdfadsf