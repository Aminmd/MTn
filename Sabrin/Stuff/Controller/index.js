app.controller('indexCtl', function ($scope,$http) { 

  $scope.titel="Nran";
  $baseUrl="http://amoein.ir/";
  $serviceUrl="service.php/api/";

  $scope.name= '';
  $scope.isAdd=true;
  $scope.in={};
  $scope.tabel=[];

  $scope.Add = function ()
  {
    var a = {};
    a.id=createGuid();
    a.TT=$scope.in.tt;  
    a.BSC=$scope.in.bsc; 
    a.Site=$scope.in.site;  
    a.Start=$scope.in.start;
    a.Reason=$scope.in.reason;
    a.Comment=$scope.in.comment;
    a.Priority=$scope.in.priority;
    a.Region=$scope.in.region;
    a.Index=$scope.in.index;
    a.Pending=$scope.in.pending;
    a.Comment2==$scope.in.comment2; 
    a.SLA=$scope.in.sla;
    a.t2G = $scope.in.net2G;
    a.t3G = $scope.in.net3G;
    a.t4G = $scope.in.net4G;
    $scope.in={};
    $scope.tabel.push(a);
    debugger;
  }

  $scope.updateLoad = function(guidid)
  {
    var id= 0;

    while($scope.tabel[id] != null)
    {
      if ($scope.tabel[id].id == guidid)
        break;

      id++;
    }
    debugger;
    var a = {};
    toggeladd();
    a.id=$scope.tabel[id].id;
    a.tt=$scope.tabel[id].TT;  
    a.bsc=$scope.tabel[id].BSC; 
    a.site=$scope.tabel[id].Site;  
    a.start=$scope.tabel[id].Start;
    a.reason=$scope.tabel[id].Reason;
    a.comment=$scope.tabel[id].comment;
    a.priority=$scope.tabel[id].Priority;
    a.region=$scope.tabel[id].Region;
    a.index=$scope.tabel[id].Index;
    a.pending=$scope.tabel[id].Pending;
    a.comment2==$scope.tabel[id].Comment2; 
    a.sla=$scope.tabel[id].SLA;
    a.net2G = $scope.tabel[id].t2G;
    a.net3G = $scope.tabel[id].t3G;
    a.net4G = $scope.tabel[id].St4G;
    $scope.in = {};
    $scope.in = a;

  }

  $scope.Update= function (guidid)
  {debugger;
    var id= 0;

    while($scope.tabel[id] != null)
    {
      if ($scope.tabel[id].id == guidid)
        break;

      id++;
    }

    $scope.tabel[id].TT=$scope.in.tt;  
    $scope.tabel[id].BSC=$scope.in.bsc; 
    $scope.tabel[id].Site=$scope.in.site;  
    $scope.tabel[id].Start=$scope.in.start;
    $scope.tabel[id].Reason=$scope.in.reason;
    $scope.tabel[id].Comment=$scope.in.comment;
    $scope.tabel[id].Priority=$scope.in.priority;
    $scope.tabel[id].Region=$scope.in.region;
    $scope.tabel[id].Index=$scope.in.index;
    $scope.tabel[id].Pending=$scope.in.pending;
    $scope.tabel[id].Comment2==$scope.in.comment2; 
    $scope.tabel[id].SLA=$scope.in.sla;
    $scope.tabel[id].t2G = $scope.in.net2G;
    $scope.tabel[id].t3G = $scope.in.net3G;
    $scope.tabel[id].t4G = $scope.in.net4G;
    $scope.tabel.push(a);
    debugger;
  }

  $scope.Delete = function(guidid)
  {
    var id= 0;

    while($scope.tabel[id] != null)
    {
      if ($scope.tabel[id].id == guidid)
        break;

      id++;
    }

    $scope.tabel.splice(id,1);

  }


  function createGuid()
  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  function toggeladd()
  {
    if ($scope.isAdd)
     { $scope.isAdd =false;}
   else{$scope.isAdd=true;}
 }

});

