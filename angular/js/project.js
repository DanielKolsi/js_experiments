angular.module('project', ['ngRoute', 'firebase'])

.value('fbURL', 'https://ng-projects-list.firebaseio.com/')

.service('fbRef', function(fbURL) {
  return new Firebase(fbURL)
})
.service('dadAuth', function($q, $firebaseAuth, fbRef) {

  return function () {

      var authObj = $firebaseAuth(fbRef);
      var deferred = $q.defer();

      authObj.$authAnonymously().then(function(authData) {
          console.log('auth3');
          deferred.resolve(authData);
      });
      console.log('auth4');
      return deferred.promise;
  }
})

.service('Projects', function($q, $firebase, fbRef, dadAuth, projectListValue) {
  var self = this;
  this.fetch = function () {

    return dadAuth().then(function(auth) {
      console.log('auth5');
      var deferred = $q.defer();
      var ref = fbRef.child('projects-fresh/' + auth.auth.uid);
      var $projects = $firebase(ref);
      $projects.$set(projectListValue);

      self.projects = $projects.$asArray();
      console.log('auth7');
      deferred.resolve(self.projects);
      return deferred.promise;
    });
  };
})

.config(function($routeProvider) {
  var resolveProjects = {
    projects: function (Projects) {
      return Projects.fetch();
    }
  };

  $routeProvider
    .when('/', {
      controller:'ProjectListController as projectList',
      templateUrl:'html/list.html',
      resolve: resolveProjects
    })
})

.controller('ProjectListController', function(projects) {
  var projectList = this;
  projectList.projects = projects;
})
