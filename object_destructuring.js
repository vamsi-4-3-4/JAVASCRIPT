var myCiscoProducts={
    router:"Cisco 8000 Series Routers",
    gateway:"Cisco 7600 Wireless Security Gateway",
    accesspoints:"Cisco 6300 Series Embedded Services Access Points",
    ncs:"Cisco 5000 Series Enterprise Network Compute System",
    isa:"Cisco Secure Firewall ISA3000",
    gridrouters:"Cisco 2000 Series Connected Grid Routers",

};

var {router}=myCiscoProducts;
var {gateway}=myCiscoProducts;
var {accesspoints,ncs,isa}=myCiscoProducts;

console.log("ROUTER\n",router);
console.log("GATWAY\n",gateway);
console.log("ACCESS POINT\n",accesspoints,"\nNETWORK COMPUTER SYSTEM\n",ncs,"\nINDUSTRIAL SECURITY APPLIANCES\n",isa)
