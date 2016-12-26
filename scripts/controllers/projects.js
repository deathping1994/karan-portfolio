'use strict';
angular.module('deathping1994githubioApp')
  .controller('ProjectCtrl', function ($scope) {

    $scope.contributions=[
                        {
                          name:"Kaivalya Communications",
                          url:"https://github.com/apache/incubator-concerted",
                          description:"Concerted is a next generation big data engine aimed at supporting massive in memory reads for OLAP support.The engine is flexible, with no single point of entry and flexibility to use APIs suited for each use case with full scalability.Concerted allows applications to use the native APIs to have the flexibility to store, access, scale data in memory on demand. No auxillary infrastructure is needed.Concerted implements its own locking manager and transaction manager utilizing the object oriented model,thus greatly simplifying the management of processes like commit and abort, depending a lot on the OS's native support.",
                        },
                        {
                        name:"Mozilla Treeherder",
                        url:"https://github.com/mozilla/treeherder",
                        description:"A reporting dashboard & service for managing CI data for commits to Mozilla projects"
                        },
                        {name:"Moz-Games",
                        url:"https://github.com/mozilla/moz-games",
                        description:"Mozilla Games site"}
                        ];
    $scope.projects= [
    {
        name: "Social Cause | Clothes Donation Advert",
        src: "https://youtube.com/embed/FKyhC-RfF3U",
        type: "video",
        description: "A video advertisement direccted towards youth, spreading awareness about hardships faced by the poor and underpriviledged during winters. This video was screened infront of 100+ audience and recieved positive reviews.",
    },
    {
      name: "Mobile Handset Advertisement",
      src: "https://www.youtube.com/embed/FY6CI6k41vg",
      description: "This advertisement was created for a college assignment.The video shows the different kind of camera shots geerally used in a advertisements."
      },
      {
        name: "Broadcast Journalism | Azhar Movie Trailer",
        src: "https://youtube.com/embed/uZsA1DcGTUg",
        description: "A college assignment to test video editing skills and Broadcast Journalism",
      },
      {
        name: "Comedy Video | Shit People Do on Facebook",
        src: "https://www.youtube.com/embed/m4fRp8zeuKY",
        description: "Acted and Scripted a comedy video in collaboration with youtube channel -  `The Placebo Fusion`",
      }];
  });
