import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { fetchFiles } from '../actions/DashboardActions';
import {
  Header,
  SideBar,
} from '../components';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchFiles();
  }
  render() {
    const { collapse, users } = this.props;
    return (
      <div className="main">
        <section className="page">
          <Header />
          <SideBar collapse={collapse} />
          <div className={`page-content ${collapse ? 'collapsed_sidebar' : ''}`}>
            <div className="table-holder">
              {
                (users.length) && (
                  <BootstrapTable data={users}>
                    <TableHeaderColumn dataField='fileName' isKey>FileName</TableHeaderColumn>
                    <TableHeaderColumn dataField='first_name'>First Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_name'>Last Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='gender' dataSort>Gender</TableHeaderColumn>
                    <TableHeaderColumn dataField='ip_address' dataSort>IP Address</TableHeaderColumn>
                  </BootstrapTable>
                )
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    collapse: state.dashboard.collapse,
    users: state.dashboard.users,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchFiles: () => {
    dispatch(fetchFiles())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);