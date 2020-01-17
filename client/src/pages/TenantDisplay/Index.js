import React from "react";
import Tenant from "../../components/Tenant";

// import Database from "database"

function TenantDisplay() {
     return (
          <h1>Tenant List</h1>
          <Tenant name={tenants[0].name} Rent={tenants[0].rent} unit_no={tenants[0].unit_no} rent_current={tenants[0].rent_current} rent_status={tenants[0].rent_status} issues={tenants[0].issues} mgr_comment={tenants[0].mgr_comment}></Tenant>

          <Tenant name={tenants[1].name} Rent={tenants[1].rent} unit_no={tenants[1].unit_no} rent_current={tenants[1].rent_current} rent_status={tenants[1].rent_status} issues={tenants[1].issues} mgr_comment={tenants[1].mgr_comment}></Tenant>
     )
}
export default TenantDisplay;