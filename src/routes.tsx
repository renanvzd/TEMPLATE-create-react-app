import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages";
import { QuemSomos } from "./Pages/QuemSomos";
import { Contatos } from "./Pages/Contatos";

export function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contatos" component={Contatos} />
      </Switch>
  );
}
