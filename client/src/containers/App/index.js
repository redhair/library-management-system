import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AlertProvider } from '../../components/AlertProvider';
import Layout from '../Layout';
import Books from '../Books';
import AddBookDetails from '../AddBookDetails';
import EditBookDetails from '../EditBookDetails';
import BookHistory from '../BookHistory';
import BookDetails from '../BookDetails';
import BookReport from '../BookReport';
import NoMatch from '../NoMatch';
import theme from '../../theme.js';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <Switch>
            <Layout exact path={`/`} component={Books} />
            <Layout exact path={`/books/add`} component={AddBookDetails} />
            <Layout exact path={`/books/:id`} component={BookDetails} />
            <Layout exact path={`/books/:id/edit`} component={EditBookDetails} />
            <Layout exact path={`/books/:id/history`} component={BookHistory} />
            <Layout exact path={`/report`} component={BookReport} />
            <Layout component={NoMatch} />
          </Switch>
        </AlertProvider>
      </ThemeProvider>
    </Router>
  );
}
