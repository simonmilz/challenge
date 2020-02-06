import { environment as qaEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';
import { environment as localEnvironment } from './environment.local';

export  let environment = qaEnvironment;
if(process.env.REACT_APP_CONFIGURATIONS == 'dev'){
   environment = qaEnvironment;
}
if(process.env.REACT_APP_CONFIGURATIONS == 'prod'){
  environment = prodEnvironment;
}
if(process.env.REACT_APP_CONFIGURATIONS == 'local'){
  environment = localEnvironment;
}


