Router.map(function () {
  this.route('*', {
    where: 'server',

    action: function () {
      this.response.writeHead(301, { Location: 'http://www.meetup.com/Meteor-Stavanger' });
      this.response.end();
    }
  });
});
