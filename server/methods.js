if (Meteor.isServer) {
    console.log("Printed on the server");
}

if (Meteor.isClient) {
    console.log("Printed in browsers and mobile apps");
}

if (Meteor.isCordova) {
    console.log("Printed only in mobile cordova apps");
}