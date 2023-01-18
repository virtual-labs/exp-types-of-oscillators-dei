/* _inputParameters: an object with different values for the model parameters */
function T06_SHO2(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
  var _model = EJSS_CORE.createAnimationLMS();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

  var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog,
    downloadText: EJSS_TOOLS.File.downloadText,
    uploadText: function(action) { EJSS_TOOLS.File.uploadText(_model,action); } 
  };

  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var m; // EjsS Model.Variables.Parameters.m
  var k; // EjsS Model.Variables.Parameters.k
  var b; // EjsS Model.Variables.Parameters.b
  var v0; // EjsS Model.Variables.Parameters.v0
  var F0; // EjsS Model.Variables.Parameters.F0
  var w; // EjsS Model.Variables.Parameters.w
  var x0; // EjsS Model.Variables.Parameters.x0
  var tmax; // EjsS Model.Variables.Parameters.tmax

  var x; // EjsS Model.Variables.Dynamic Vars.x
  var v; // EjsS Model.Variables.Dynamic Vars.v
  var t; // EjsS Model.Variables.Dynamic Vars.t
  var dt; // EjsS Model.Variables.Dynamic Vars.dt
  var Fdrive; // EjsS Model.Variables.Dynamic Vars.Fdrive
  var Fdamp; // EjsS Model.Variables.Dynamic Vars.Fdamp
  var tol; // EjsS Model.Variables.Dynamic Vars.tol

  var showVelocity; // EjsS Model.Variables.Plot Vars.showVelocity
  var yLabel; // EjsS Model.Variables.Plot Vars.yLabel
  var title; // EjsS Model.Variables.Plot Vars.title
  var msg; // EjsS Model.Variables.Plot Vars.msg
  var plotWidth; // EjsS Model.Variables.Plot Vars.plotWidth
  var plotHeight; // EjsS Model.Variables.Plot Vars.plotHeight

  var _privateOdesList;
  var _ODEi_evolution1;
  var userEvents1=[];

  _model.getOdes = function() { 
    return [_ODEi_evolution1]; 
  };

  _model.removeEvents = function(){
    userEvents1=[];
  };

  function _serialize() {
    return _model.serialize();
  }

  _model._userSerialize = function() {
    return {
      m : m,
      k : k,
      b : b,
      v0 : v0,
      F0 : F0,
      w : w,
      x0 : x0,
      tmax : tmax,
      x : x,
      v : v,
      t : t,
      dt : dt,
      Fdrive : Fdrive,
      Fdamp : Fdamp,
      tol : tol,
      showVelocity : showVelocity,
      yLabel : yLabel,
      title : title,
      msg : msg,
      plotWidth : plotWidth,
      plotHeight : plotHeight
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      m : m,
      k : k,
      b : b,
      v0 : v0,
      F0 : F0,
      w : w,
      x0 : x0,
      tmax : tmax,
      x : x,
      v : v,
      t : t,
      dt : dt,
      Fdrive : Fdrive,
      Fdamp : Fdamp,
      tol : tol,
      showVelocity : showVelocity,
      yLabel : yLabel,
      title : title,
      msg : msg,
      plotWidth : plotWidth,
      plotHeight : plotHeight
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.v0 != "undefined") v0 = json.v0;
    if(typeof json.F0 != "undefined") F0 = json.F0;
    if(typeof json.w != "undefined") w = json.w;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.tmax != "undefined") tmax = json.tmax;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.v != "undefined") v = json.v;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.Fdrive != "undefined") Fdrive = json.Fdrive;
    if(typeof json.Fdamp != "undefined") Fdamp = json.Fdamp;
    if(typeof json.tol != "undefined") tol = json.tol;
    if(typeof json.showVelocity != "undefined") showVelocity = json.showVelocity;
    if(typeof json.yLabel != "undefined") yLabel = json.yLabel;
    if(typeof json.title != "undefined") title = json.title;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.plotWidth != "undefined") plotWidth = json.plotWidth;
    if(typeof json.plotHeight != "undefined") plotHeight = json.plotHeight;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.m != "undefined") m = json.m;
    if(typeof json.k != "undefined") k = json.k;
    if(typeof json.b != "undefined") b = json.b;
    if(typeof json.v0 != "undefined") v0 = json.v0;
    if(typeof json.F0 != "undefined") F0 = json.F0;
    if(typeof json.w != "undefined") w = json.w;
    if(typeof json.x0 != "undefined") x0 = json.x0;
    if(typeof json.tmax != "undefined") tmax = json.tmax;
    if(typeof json.x != "undefined") x = json.x;
    if(typeof json.v != "undefined") v = json.v;
    if(typeof json.t != "undefined") t = json.t;
    if(typeof json.dt != "undefined") dt = json.dt;
    if(typeof json.Fdrive != "undefined") Fdrive = json.Fdrive;
    if(typeof json.Fdamp != "undefined") Fdamp = json.Fdamp;
    if(typeof json.tol != "undefined") tol = json.tol;
    if(typeof json.showVelocity != "undefined") showVelocity = json.showVelocity;
    if(typeof json.yLabel != "undefined") yLabel = json.yLabel;
    if(typeof json.title != "undefined") title = json.title;
    if(typeof json.msg != "undefined") msg = json.msg;
    if(typeof json.plotWidth != "undefined") plotWidth = json.plotWidth;
    if(typeof json.plotHeight != "undefined") plotHeight = json.plotHeight;
  };

  function _unserializePublic(json) {
    return _model.unserializePublic(json);
  }

  _model._userUnserializePublic = function(json) {
    _model._readParametersPublic(json);
   _resetSolvers();
   _model.update();
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Mass on Spring"] = true;
    __pagesEnabled["Pause"] = true;
  });

  _model.addToReset(function() {
    m = 1.0; // EjsS Model.Variables.Parameters.m
    k = 2.0; // EjsS Model.Variables.Parameters.k
    b = 0.0; // EjsS Model.Variables.Parameters.b
    v0 = 0.0; // EjsS Model.Variables.Parameters.v0
    F0 = 0.0; // EjsS Model.Variables.Parameters.F0
    w = 1.41; // EjsS Model.Variables.Parameters.w
    x0 = 0.0; // EjsS Model.Variables.Parameters.x0
    tmax = 50.0; // EjsS Model.Variables.Parameters.tmax
  });

  _model.addToReset(function() {
    x = x0; // EjsS Model.Variables.Dynamic Vars.x
    v = v0; // EjsS Model.Variables.Dynamic Vars.v
    t = 0.0; // EjsS Model.Variables.Dynamic Vars.t
    dt = 0.1; // EjsS Model.Variables.Dynamic Vars.dt
    Fdrive = F0*Math.cos(w*t); // EjsS Model.Variables.Dynamic Vars.Fdrive
    Fdamp = -b*v; // EjsS Model.Variables.Dynamic Vars.Fdamp
    tol = 1e-05; // EjsS Model.Variables.Dynamic Vars.tol
  });

  _model.addToReset(function() {
    showVelocity = false; // EjsS Model.Variables.Plot Vars.showVelocity
    yLabel = "Position (m)"; // EjsS Model.Variables.Plot Vars.yLabel
    title = "Position (Purple) vs. Time"; // EjsS Model.Variables.Plot Vars.title
    msg = ""; // EjsS Model.Variables.Plot Vars.msg
    plotWidth = (_isMobile||_isEPub)?400:650; // EjsS Model.Variables.Plot Vars.plotWidth
    plotHeight = (_isMobile||_isEPub)?360:400; // EjsS Model.Variables.Plot Vars.plotHeight
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _privateOdesList=[];
    _ODEi_evolution1 = _ODE_evolution1();
    _privateOdesList.push(_ODEi_evolution1);
  });

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  function resetTime () {  // > CustomCode.Reset Time:1
    _pause();  // > CustomCode.Reset Time:2
    msg = "";  // > CustomCode.Reset Time:3
    t = 0.0;  // > CustomCode.Reset Time:4
    x = x0;  // > CustomCode.Reset Time:5
    v = v0;  // > CustomCode.Reset Time:6
    _view.xTrail.clear();  // > CustomCode.Reset Time:7
    _view.vTrail.clear();  // > CustomCode.Reset Time:8
  }  // > CustomCode.Reset Time:9

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    if(_isMobile||_isEPub){  // > Initialization.Init Page:1
      dt=0.2;  // > Initialization.Init Page:2
      _model.setFPS(10);  // > Initialization.Init Page:3
      _view.dampingLabel.setProperty("CSS",{"display":"none"});  // > Initialization.Init Page:4
    }  // > Initialization.Init Page:5
  });

  _model.addToInitialization(function() {
    _initializeSolvers();
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Mass on Spring"]) return;
    _ODEi_evolution1.step();
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  function _initializeSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].initializeSolver();
  }

  function _automaticResetSolvers() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].automaticResetSolver();
  }

  _model.resetSolvers = function() {
    for (var i=0,n=_privateOdesList.length; i<n; i++) _privateOdesList[i].resetSolver();
  };

  _getODE = function (_odeName) {
    if (_odeName=="Mass on Spring") return _ODEi_evolution1;
    return null;
  }

  function _getEventSolver(_odeName) {
    var ode = _getODE(_odeName);
    if (ode===null) return null;
    return ode.getEventSolver();
  }

  function _setSolverClass(_odeName, _engine) {
    var ode = _getODE(_odeName);
    if (ode===null) return;
    if (!_engine.setODE) {
      var classname = _engine.toLowerCase();
      if      (classname.indexOf("boga")>=0)   _engine = EJSS_ODE_SOLVERS.bogackiShampine23;
      else if (classname.indexOf("cash")>=0)   _engine = EJSS_ODE_SOLVERS.cashKarp45;
      else if (classname.indexOf("dopri5")>=0) _engine = EJSS_ODE_SOLVERS.dopri5;
      else if (classname.indexOf("dopri8")>=0) _engine = EJSS_ODE_SOLVERS.dopri853;
      else if (classname.indexOf("richa")>=0)  _engine = EJSS_ODE_SOLVERS.eulerRichardson;
      else if (classname.indexOf("euler")>=0)  _engine = EJSS_ODE_SOLVERS.euler;
      else if (classname.indexOf("fehlberg87")>=0) _engine = EJSS_ODE_SOLVERS.fehlberg87;
      else if (classname.indexOf("fehlberg8")>=0)  _engine = EJSS_ODE_SOLVERS.fehlberg8;
      else if (classname.indexOf("radau")>=0)   _engine = EJSS_ODE_SOLVERS.radau5;
      else if (classname.indexOf("runge")>=0)  _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("rk4")>=0)    _engine = EJSS_ODE_SOLVERS.rungeKutta4;
      else if (classname.indexOf("verlet")>=0) _engine = EJSS_ODE_SOLVERS.velocityVerlet;
    }
    if (_engine) ode.setSolverClass(_engine);
  }

  function _ODE_evolution1() {
    var __odeSelf = {};
    var __eventSolver;
    var __solverClass = EJSS_ODE_SOLVERS.rungeKutta4;
    var __state=[];
    var _ODE_evolution1_Event1;
    var __ignoreErrors=false;
    var __mustInitialize=true;
    var __isEnabled=true;
    var __mustUserReinitialize=false;
    var __mustReinitialize=true;


    __odeSelf._getOdeVars = function (){ return["x","v","t"]};

    __odeSelf.setSolverClass = function(__aSolverClass) {
      __solverClass = __aSolverClass;
      __instantiateSolver();
    };

    function __instantiateSolver() {
      __state=[];
      __pushState();
      __eventSolver = EJSS_ODE_SOLVERS.interpolatorEventSolver(__solverClass(),__odeSelf);
      __mustInitialize = true;
    }

    __odeSelf.setEnabled = function(_enabled) { __isEnabled = _enabled; };

    __odeSelf.getIndependentVariableValue = function() { return __eventSolver.getIndependentVariableValue(); };

    __odeSelf.getInternalStepSize = function() { return __eventSolver.getInternalStepSize(); };

    __odeSelf.isAccelerationIndependentOfVelocity = function() { return false; };

    __odeSelf.initializeSolver = function() {
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); return; }
      __pushState();
      __eventSolver.initialize(dt);
      __eventSolver.setBestInterpolation(false);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.removeAllEvents();
      if (__pagesEnabled["Pause"]) __eventSolver.addEvent(_ODE_evolution1_Event1());
      for(k in userEvents1){__eventSolver.addEvent(userEvents1[k]);}
      __eventSolver.setEstimateFirstStep(false);
      __eventSolver.setEnableExceptions(false);
      __eventSolver.setTolerances(0.00001,0.00001);
      __mustReinitialize = true;
      __mustInitialize = false;
    };

    function __pushState() {
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        if (__state[__cIn]!=x) __mustReinitialize = true;
        __state[__cIn++] = x;
        if (__state[__cIn]!=v) __mustReinitialize = true;
        __state[__cIn++] = v;
        if (__state[__cIn]!=t) __mustReinitialize = true;
        __state[__cIn++] = t;
    }

    function __arraysChanged () {
      return false;
    }

    __odeSelf.getEventSolver = function() {
      return __eventSolver;
    };

    __odeSelf.resetSolver = function() {
      __mustUserReinitialize = true;
    };

    __odeSelf.automaticResetSolver = function() {
      __mustReinitialize = true;
    };
    function __errorAction () {
      if (__ignoreErrors) return;
      console.log (__eventSolver.getErrorMessage());
      _pause();
      // Make sure the solver is reinitialized;
      __mustReinitialize = true;
    }

    __odeSelf.step = function() { return __privateStep(false); };

    __odeSelf.solverStep = function() { return __privateStep(true); };

    function __privateStep(__takeMaximumStep) {
      if (!__isEnabled) return 0;
      if (dt===0) return 0;
      if (__mustInitialize) __odeSelf.initializeSolver();
      if (__arraysChanged()) { __instantiateSolver(); __odeSelf.initializeSolver(); }
      __eventSolver.setStepSize(dt);
      __eventSolver.setInternalStepSize(dt);
      __eventSolver.setMaximumInternalSteps(10000);
      __eventSolver.setTolerances(0.00001,0.00001);
      __pushState();
      if (__mustUserReinitialize) { 
        __eventSolver.userReinitialize();
        __mustUserReinitialize = false;
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      else if (__mustReinitialize) { 
        __eventSolver.reinitialize();
        __mustReinitialize = false;
        if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      }
      var __stepTaken = __takeMaximumStep ? __eventSolver.maxStep() : __eventSolver.step();
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        v = __state[__cOut++];
        t = __state[__cOut++];
      // Check for error
      if (__eventSolver.getErrorCode()!=EJSS_ODE_SOLVERS.ERROR.NO_ERROR) __errorAction();
      return __stepTaken;
    }

    __odeSelf.getState = function() { return __state; };

    __odeSelf.getRate = function(_aState,_aRate) {
      _aRate[_aRate.length-1] = 0.0; // In case the prelim code returns
      var __index=-1; // so that it can be used in preliminary code
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var v = _aState[__cOut++];
        var t = _aState[__cOut++];
      // Preliminary code: Code to be executed before rate equations are evaluated
        Fdrive = F0*Math.cos(w*t);  // > Preliminary code for ODE.Mass on Spring:1
        Fdamp = -b*v;  // > Preliminary code for ODE.Mass on Spring:2
        var a = (1/m) * (Fdrive + Fdamp - k*x);  // > Preliminary code for ODE.Mass on Spring:3
      // Compute the rate
        var __cRate=0;
        _aRate[__cRate++] = v; // Rate for ODE: Mass on Spring:x
        _aRate[__cRate++] = a; // Rate for ODE: Mass on Spring:v
        _aRate[__cRate++] = 1; // independent variable
        return _aRate;
    }; //end of getRate

    __odeSelf._addEvent = function(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent){
    var User_Event = function (userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent) {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return eventType; };

      _eventSelf.getRootFindingMethod = function() { return eventMethod; };

      _eventSelf.getMaxIterations = function() { return maxIter; };

      _eventSelf.getTolerance = function() { return eventTolerance; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var v = _aState[__cOut++];
        var t = _aState[__cOut++];
      return eval(userCondition);
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        v = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = v;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        if (undefined != functions) eval(functions.toString());
        eval(userAction);
        return endAtEvent;
      }

      return _eventSelf;
    }; // End of event

   userEvents1.push(User_Event(userCondition,userAction,eventType,eventMethod,maxIter,eventTolerance,endAtEvent));
   }

    _ODE_evolution1_Event1 = function() {
      var _eventSelf = {};

      _eventSelf.getTypeOfEvent = function() { return EJSS_ODE_SOLVERS.EVENT_TYPE.STATE_EVENT; };

      _eventSelf.getRootFindingMethod = function() { return EJSS_ODE_SOLVERS.EVENT_METHOD.BISECTION; };

      _eventSelf.getMaxIterations = function() { return 100; };

      _eventSelf.getTolerance = function() { return tol; };

      _eventSelf.evaluate = function(_aState) { 
      // Extract our variables from _aState
        var __i=0;
        var __cOut=0;
        var x = _aState[__cOut++];
        var v = _aState[__cOut++];
        var t = _aState[__cOut++];
        var min = tol;  // > Event zero-condition for page Mass on Spring:1
        if (tmax - t < min) {  // > Event zero-condition for page Mass on Spring:2
          min = tmax - t;  // > Event zero-condition for page Mass on Spring:3
        }  // > Event zero-condition for page Mass on Spring:4
        return min;  // > Event zero-condition for page Mass on Spring:5
      };

      _eventSelf.action = function() { 
      // Extract our variables from __state
        var __i=0;
        var __cOut=0;
        x = __state[__cOut++];
        v = __state[__cOut++];
        t = __state[__cOut++];
        var _returnValue = __userDefinedAction();
      // Copy our variables to __state[] 
        var __j=0;
        var __n=0;
        var __cIn=0;
        __state[__cIn++] = x;
        __state[__cIn++] = v;
        __state[__cIn++] = t;
        return _returnValue;
      };

      function __userDefinedAction() {
        _pause();  // > Event action for page Mass on Spring:1
        msg = "End of simulation";  // > Event action for page Mass on Spring:2
        return true;
      }

      return _eventSelf;
    }; // End of event

    __instantiateSolver();

    return __odeSelf;
  }

  function _historic_x(__time) {
    var __index = 0;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

  function _historic_v(__time) {
    var __index = 0 + 1;
    return _ODEi_evolution1.getEventSolver().getStateHistory().interpolate(__time,__index);
  }

    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 750, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new T06_SHO2_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.dampingLabel.linkProperty("Visibility",  function() { return !(_isMobile||_isEPub); } ); // HtmlView Page linking property 'Visibility' for element 'dampingLabel'
          _view.manual.setAction("OnCheckOn", function(_data,_info) {
  _pause();
  t = 0.0;
  x = x0 = 0.0;
  v = v0 = 0.0;
  F0 = 0.0;
  b = 0.5;
  w = 1.41;
  _view.displacementSliderPanel.setProperty("CSS",{"display":"block"});
  _view.parameterPanel.setProperty("CSS",{"display":"block"});
  _view.xTrail.clear();
  _view.vTrail.clear();

}); // HtmlView Page setting action 'OnCheckOn' for element 'manual'
          _view.underDamped.setAction("OnCheckOn", function(_data,_info) {
  _pause();
  t = 0.0;
  x = x0 = 10.0;
  v = v0 = 0.0;
  F0 = 0.0;
  b = 0.2;
  _view.displacementSliderPanel.setProperty("CSS",{"display":"none"});
  _view.parameterPanel.setProperty("CSS",{"display":"none"});
  _view.xTrail.clear();
  _view.vTrail.clear();
  _view._resized(window.innerWidth,window.innerHeight);

}); // HtmlView Page setting action 'OnCheckOn' for element 'underDamped'
          _view.overDamped.setAction("OnCheckOn", function(_data,_info) {
  _pause();
  t = 0.0;
  x = x0 = 10.0;
  v = v0 = 0.0;
  F0 = 0.0;
  b = 10.0;
  _view.displacementSliderPanel.setProperty("CSS",{"display":"none"});
  _view.parameterPanel.setProperty("CSS",{"display":"none"});
  _view.xTrail.clear();
  _view.vTrail.clear();
    _view._resized(window.innerWidth,window.innerHeight);

}); // HtmlView Page setting action 'OnCheckOn' for element 'overDamped'
          _view.criticallyDamped.setAction("OnCheckOn", function(_data,_info) {
  _pause();
  t = 0.0;
  x = x0 = 10.0;
  v = v0 = 0.0;
  F0 = 0.0;
  b = 2*Math.sqrt(m*k);
  _view.displacementSliderPanel.setProperty("CSS",{"display":"none"});
  _view.parameterPanel.setProperty("CSS",{"display":"none"});
  _view.xTrail.clear();
  _view.vTrail.clear();
  _view._resized(window.innerWidth,window.innerHeight);

}); // HtmlView Page setting action 'OnCheckOn' for element 'criticallyDamped'
          _view.plots.linkProperty("Height",  function() { return plotHeight; }, function(_v) { plotHeight = _v; } ); // HtmlView Page linking property 'Height' for element 'plots'
          _view.plots.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'plots'
          _view.plotpanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'plotpanel'
          _view.plottingPanel.linkProperty("Title",  function() { return title; }, function(_v) { title = _v; } ); // HtmlView Page linking property 'Title' for element 'plottingPanel'
          _view.plottingPanel.linkProperty("TitleY",  function() { return yLabel; }, function(_v) { yLabel = _v; } ); // HtmlView Page linking property 'TitleY' for element 'plottingPanel'
          _view.xTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'xTrail'
          _view.xTrail.linkProperty("InputY",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'InputY' for element 'xTrail'
          _view.vTrail.linkProperty("InputX",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'InputX' for element 'vTrail'
          _view.vTrail.linkProperty("Visibility",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Visibility' for element 'vTrail'
          _view.vTrail.linkProperty("InputY",  function() { return v; }, function(_v) { v = _v; } ); // HtmlView Page linking property 'InputY' for element 'vTrail'
          _view.xDot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'xDot'
          _view.xDot.linkProperty("Y",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'Y' for element 'xDot'
          _view.vDot.linkProperty("X",  function() { return t; }, function(_v) { t = _v; } ); // HtmlView Page linking property 'X' for element 'vDot'
          _view.vDot.linkProperty("Y",  function() { return v; }, function(_v) { v = _v; } ); // HtmlView Page linking property 'Y' for element 'vDot'
          _view.vDot.linkProperty("Visibility",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Visibility' for element 'vDot'
          _view.graphpanel.linkProperty("Width",  function() { return plotWidth; }, function(_v) { plotWidth = _v; } ); // HtmlView Page linking property 'Width' for element 'graphpanel'
          _view.drawingPanel.linkProperty("BRMessage",  function() { return msg; }, function(_v) { msg = _v; } ); // HtmlView Page linking property 'BRMessage' for element 'drawingPanel'
          _view.cursor.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'cursor'
          _view.cursor.setAction("OnDrag", function(_data,_info) {
  x0 = x;

}); // HtmlView Page setting action 'OnDrag' for element 'cursor'
          _view.spring.linkProperty("SizeX",  function() { return x+11.0-0.75; } ); // HtmlView Page linking property 'SizeX' for element 'spring'
          _view.springBob.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'springBob'
          _view.vArrow.linkProperty("SizeX",  function() { return v*0.3; } ); // HtmlView Page linking property 'SizeX' for element 'vArrow'
          _view.vArrow.linkProperty("X",  function() { return x; }, function(_v) { x = _v; } ); // HtmlView Page linking property 'X' for element 'vArrow'
          _view.vArrow.linkProperty("Visibility",  function() { return showVelocity; }, function(_v) { showVelocity = _v; } ); // HtmlView Page linking property 'Visibility' for element 'vArrow'
          _view.playPause.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPause'
          _view.playPause.linkProperty("State",  function() { return _isPaused; }, function(_v) { _isPaused = _v; } ); // HtmlView Page linking property 'State' for element 'playPause'
          _view.playPause.setAction("OnClick", _play); // HtmlView Page setting action 'OnClick' for element 'playPause'
          _view.step.setAction("OnClick", _step); // HtmlView Page setting action 'OnClick' for element 'step'
          _view.resetTime.setAction("OnClick", function(_data,_info) {
  resetTime ();

}); // HtmlView Page setting action 'OnClick' for element 'resetTime'
          _view.reset.setAction("OnClick", _reset); // HtmlView Page setting action 'OnClick' for element 'reset'
          _view.showVelocityCheckBox.setAction("OnCheckOff", function(_data,_info) {
  showVelocity = false;
  yLabel = "Position (m)";
  title = "Position (Purple) vs. Time";

}); // HtmlView Page setting action 'OnCheckOff' for element 'showVelocityCheckBox'
          _view.showVelocityCheckBox.setAction("OnCheckOn", function(_data,_info) {
  showVelocity = true;
  yLabel = "Position (m) and Velocity (m/s)";
  title = "Position (Purple) and Velocity (blue) vs. Time";

}); // HtmlView Page setting action 'OnCheckOn' for element 'showVelocityCheckBox'
          _view.displacementField.linkProperty("Value",  function() { return x0; }, function(_v) { x0 = _v; } ); // HtmlView Page linking property 'Value' for element 'displacementField'
          _view.displacementField.setAction("OnChange", function(_data,_info) {
  x = x0;

}); // HtmlView Page setting action 'OnChange' for element 'displacementField'
          _view.bSlider.linkProperty("Value",  function() { return b; }, function(_v) { b = _v; } ); // HtmlView Page linking property 'Value' for element 'bSlider'
          _view.bField.linkProperty("Value",  function() { return b; }, function(_v) { b = _v; } ); // HtmlView Page linking property 'Value' for element 'bField'
          _view.v0Slider.linkProperty("Value",  function() { return v0; }, function(_v) { v0 = _v; } ); // HtmlView Page linking property 'Value' for element 'v0Slider'
          _view.v0Slider.setAction("OnChange", function(_data,_info) {
  _pause();
  v = v0;

}); // HtmlView Page setting action 'OnChange' for element 'v0Slider'
          _view.v0Field.linkProperty("Value",  function() { return v0; }, function(_v) { v0 = _v; } ); // HtmlView Page linking property 'Value' for element 'v0Field'
          _view.wSlider.linkProperty("Value",  function() { return w; }, function(_v) { w = _v; } ); // HtmlView Page linking property 'Value' for element 'wSlider'
          _view.wField.linkProperty("Value",  function() { return w; }, function(_v) { w = _v; } ); // HtmlView Page linking property 'Value' for element 'wField'
          _view.F0Slider.linkProperty("Value",  function() { return F0; }, function(_v) { F0 = _v; } ); // HtmlView Page linking property 'Value' for element 'F0Slider'
          _view.F0Field.linkProperty("Value",  function() { return F0; }, function(_v) { F0 = _v; } ); // HtmlView Page linking property 'Value' for element 'F0Field'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}

function T06_SHO2_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = T06_SHO2_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function T06_SHO2_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    //_view._addElement(EJSS_INTERFACE.panel,"narrativePanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'narrativePanel'
    //  .setProperty("Html","<h2>Tutorial 6: Simple Harmonic Motion and Resonance</h2> <p>The following simulation shows a driven, damped harmonic oscillator; a 1 kg mass on a spring with spring constant 2 N/m. The amplitude of the motion is graphed versus time. The intial position of the mass, <i>x<sub>0</sub></i>, can be adjusted by dragging the mass to a starting position. The driving frequency, <i>f</i>, can be adjusted so we expect that for one particular frequency we will see the amplitude of the motion to be very large; in other words, resonance will occurr. </p> <p>Several other parameters can also be adjusted. <i>b</i> is the amount of friction in Ns/m (this could be air resistance or sliding friction or friction in the spring itself); <i>v<sub>0</sub></i> in m/s is the initial velocity of the mass, and <i>F<sub>0</sub></i> is the magnitude of the driving force in newtons.</p> <p>In this (and many other simulations we will use) it is easier to write <i>&#x3C9; = 2&#x3C0; f</i> where <i>&#x3C9;</i> is the <span style=\"font-weight: bold;\">angular frequency</span> in radians per second instead of having to write <i>2&#x3C0; f</i> everywhere.</p>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'narrativePanel'
    //  ;

    _view._addElement(EJSS_INTERFACE.wrappedPanel,"wrappedPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'wrappedPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"titlePanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'titlePanel'
      ;

    //_view._addElement(EJSS_INTERFACE.imageAndTextButton,"titlelable", _view.titlePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'titlelable'
    //  .setProperty("Text","<h1>Simple Harmonic Motion Simulation</h1>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'titlelable'
    //  ;

    _view._addElement(EJSS_INTERFACE.panel,"animationPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'animationPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"dampingLabel", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'dampingLabel'
      .setProperty("Text","Damping:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'dampingLabel'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"manual", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'manual'
      .setProperty("Checked",true) // EJsS HtmlView.HtmlView Page: setting property 'Checked' for element 'manual'
      .setProperty("Tooltip","Manual damping") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'manual'
      .setProperty("Text","Manual") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'manual'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"underDamped", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'underDamped'
      .setProperty("Tooltip","Under damped") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'underDamped'
      .setProperty("Text","Under") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'underDamped'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"overDamped", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'overDamped'
      .setProperty("Tooltip","Over damped") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'overDamped'
      .setProperty("Text","Over") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'overDamped'
      ;

    _view._addElement(EJSS_INTERFACE.radioButton,"criticallyDamped", _view.animationPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'criticallyDamped'
      .setProperty("Tooltip","Critically damped") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'criticallyDamped'
      .setProperty("Text","Critical") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'criticallyDamped'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plots", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plots'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"plotpanel", _view.plots) // EJsS HtmlView.HtmlView Page: declaration of element 'plotpanel'
      .setProperty("Height","80%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'plotpanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'plotpanel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"plottingPanel", _view.plotpanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plottingPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'plottingPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'plottingPanel'
      .setProperty("XFixedTick",0) // EJsS HtmlView.HtmlView Page: setting property 'XFixedTick' for element 'plottingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'plottingPanel'
      .setProperty("MaximumY",1.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'plottingPanel'
      .setProperty("MaximumX",2.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'plottingPanel'
      .setProperty("MinimumX",0.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'plottingPanel'
      .setProperty("MinimumY",-1.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'plottingPanel'
      .setProperty("TitleX","Time (s)") // EJsS HtmlView.HtmlView Page: setting property 'TitleX' for element 'plottingPanel'
      .setProperty("AutoScaleY",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'plottingPanel'
      .setProperty("AutoScaleX",true) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'plottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"xTrail", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xTrail'
      .setProperty("Maximum",1000) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'xTrail'
      .setProperty("LineColor","Purple") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'xTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'xTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"vTrail", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vTrail'
      .setProperty("Maximum",1000) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'vTrail'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'vTrail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'vTrail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"xDot", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xDot'
      .setProperty("FillColor","Purple") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'xDot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'xDot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'xDot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'xDot'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"vDot", _view.plottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vDot'
      .setProperty("FillColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vDot'
      .setProperty("SizeX",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'vDot'
      .setProperty("PixelSize",true) // EJsS HtmlView.HtmlView Page: setting property 'PixelSize' for element 'vDot'
      .setProperty("SizeY",6) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vDot'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"graphpanel", _view.plots) // EJsS HtmlView.HtmlView Page: declaration of element 'graphpanel'
      .setProperty("Height","20%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'graphpanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'graphpanel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.graphpanel) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Height","100%") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'drawingPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",-12.0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("ShowCoordinates",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowCoordinates' for element 'drawingPanel'
      .setProperty("Enabled",true) // EJsS HtmlView.HtmlView Page: setting property 'Enabled' for element 'drawingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'drawingPanel'
      .setProperty("MaximumX",12.0) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.cursor,"cursor", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'cursor'
      .setProperty("Sensitivity",5) // EJsS HtmlView.HtmlView Page: setting property 'Sensitivity' for element 'cursor'
      .setProperty("LineColor","White") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'cursor'
      .setProperty("CursorType","VERTICAL") // EJsS HtmlView.HtmlView Page: setting property 'CursorType' for element 'cursor'
      .setProperty("EnabledPosition","ENABLED_X") // EJsS HtmlView.HtmlView Page: setting property 'EnabledPosition' for element 'cursor'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"wall", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wall'
      .setProperty("FillColor","black") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'wall'
      .setProperty("SizeX",0.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'wall'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'wall'
      .setProperty("X",-11.25) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'wall'
      .setProperty("SizeY",2.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'wall'
      ;

    _view._addElement(EJSS_DRAWING2D.spring,"spring", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'spring'
      .setProperty("Radius",0.5) // EJsS HtmlView.HtmlView Page: setting property 'Radius' for element 'spring'
      .setProperty("X",-11.0) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'spring'
      .setProperty("Y",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'spring'
      .setProperty("SizeY",0.0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'spring'
      .setProperty("Loops",25) // EJsS HtmlView.HtmlView Page: setting property 'Loops' for element 'spring'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"springBob", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'springBob'
      .setProperty("FillColor","Purple") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'springBob'
      .setProperty("SizeX",1.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'springBob'
      .setProperty("Y",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'springBob'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'springBob'
      .setProperty("SizeY",1.5) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'springBob'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"vArrow", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'vArrow'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'vArrow'
      .setProperty("FillColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'vArrow'
      .setProperty("Measured",false) // EJsS HtmlView.HtmlView Page: setting property 'Measured' for element 'vArrow'
      .setProperty("Y",1.0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'vArrow'
      .setProperty("MarkEndColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'MarkEndColor' for element 'vArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'vArrow'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'vArrow'
      .setProperty("DrawFill",true) // EJsS HtmlView.HtmlView Page: setting property 'DrawFill' for element 'vArrow'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"controlPanel", _view.wrappedPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'controlPanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'controlPanel'
      .setProperty("CSS",{"page-break-inside":"avoid",   "display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'controlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"rowOne", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'rowOne'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'rowOne'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'rowOne'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"buttonPanel", _view.rowOne) // EJsS HtmlView.HtmlView Page: declaration of element 'buttonPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'buttonPanel'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPause", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'playPause'
      .setProperty("Tooltip","Play and pause simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPause'
      .setProperty("ImageOnUrl","/org/opensourcephysics/resources/controls/images/play.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPause'
      .setProperty("ImageOffUrl","/org/opensourcephysics/resources/controls/images/pause.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPause'
      ;

    _view._addElement(EJSS_INTERFACE.button,"step", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'step'
      .setProperty("Tooltip","Advance by one timestep") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'step'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/stepforward.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'step'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetTime", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetTime'
      .setProperty("Tooltip","Reset time") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'resetTime'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset1.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'resetTime'
      ;

    _view._addElement(EJSS_INTERFACE.button,"reset", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'reset'
      .setProperty("Tooltip","Reset simulation") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'reset'
      .setProperty("ImageUrl","/org/opensourcephysics/resources/controls/images/reset.gif") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'reset'
      ;

    _view._addElement(EJSS_INTERFACE.checkBox,"showVelocityCheckBox", _view.buttonPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'showVelocityCheckBox'
      .setProperty("Tooltip","Shows the mass velocity") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'showVelocityCheckBox'
      .setProperty("Text","V") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'showVelocityCheckBox'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"displacementSliderPanel", _view.rowOne) // EJsS HtmlView.HtmlView Page: declaration of element 'displacementSliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'displacementSliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"displacementLabel", _view.displacementSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'displacementLabel'
      .setProperty("Tooltip","Initial displacement") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'displacementLabel'
      .setProperty("Text","<i>x<sub>0</sub></i>:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'displacementLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"displacementField", _view.displacementSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'displacementField'
      .setProperty("Width",35) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'displacementField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'displacementField'
      .setProperty("Tooltip","Initial displacement") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'displacementField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'displacementField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"displacementLabel2", _view.displacementSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'displacementLabel2'
      .setProperty("Tooltip","Initial displacement") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'displacementLabel2'
      .setProperty("Text","m") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'displacementLabel2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"parameterPanel", _view.controlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'parameterPanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'parameterPanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"parameterPanelTop", _view.parameterPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'parameterPanelTop'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"bSliderPanel", _view.parameterPanelTop) // EJsS HtmlView.HtmlView Page: declaration of element 'bSliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'bSliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"bLabel", _view.bSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bLabel'
      .setProperty("Text","<i>b</i>:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'bLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"bSlider", _view.bSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bSlider'
      .setProperty("Maximum",10.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'bSlider'
      .setProperty("Minimum",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'bSlider'
      .setProperty("Step",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'bSlider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"bField", _view.bSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bField'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'bField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'bField'
      .setProperty("Tooltip","damping coefficient") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'bField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'bField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"bLabel2", _view.bSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'bLabel2'
      .setProperty("Text","Ns/m") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'bLabel2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"v0SliderPanel", _view.parameterPanelTop) // EJsS HtmlView.HtmlView Page: declaration of element 'v0SliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'v0SliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"v0Label", _view.v0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'v0Label'
      .setProperty("Text","<i>v<sub>0</sub></i>:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'v0Label'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"v0Slider", _view.v0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'v0Slider'
      .setProperty("Maximum",12.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'v0Slider'
      .setProperty("Minimum",-12.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'v0Slider'
      .setProperty("Step",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'v0Slider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"v0Field", _view.v0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'v0Field'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'v0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'v0Field'
      .setProperty("Tooltip","initial velocity") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'v0Field'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'v0Field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"v0Label2", _view.v0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'v0Label2'
      .setProperty("Text","m/s") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'v0Label2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"parameterPanelBottom", _view.parameterPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'parameterPanelBottom'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"wSliderPanel", _view.parameterPanelBottom) // EJsS HtmlView.HtmlView Page: declaration of element 'wSliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'wSliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"wLabel", _view.wSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wLabel'
      .setProperty("Text","&#x3C9;:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'wLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"wSlider", _view.wSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wSlider'
      .setProperty("Maximum",5.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'wSlider'
      .setProperty("Minimum",0.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'wSlider'
      .setProperty("Step",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'wSlider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"wField", _view.wSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wField'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'wField'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'wField'
      .setProperty("Tooltip","driving frequency (rad/s)") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'wField'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'wField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"wLabel2", _view.wSliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'wLabel2'
      .setProperty("Text","rad/s") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'wLabel2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"F0SliderPanel", _view.parameterPanelBottom) // EJsS HtmlView.HtmlView Page: declaration of element 'F0SliderPanel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'F0SliderPanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"F0Label", _view.F0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'F0Label'
      .setProperty("Text","<i>F<sub>0</sub></i>:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'F0Label'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"F0Slider", _view.F0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'F0Slider'
      .setProperty("Maximum",6.0) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'F0Slider'
      .setProperty("Minimum",-6.0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'F0Slider'
      .setProperty("Step",0.01) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'F0Slider'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"F0Field", _view.F0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'F0Field'
      .setProperty("Width",40) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'F0Field'
      .setProperty("Format","0.00") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'F0Field'
      .setProperty("Tooltip","driving amplitude") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'F0Field'
      .setProperty("Editable",true) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'F0Field'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"F0Label2", _view.F0SliderPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'F0Label2'
      .setProperty("Text","N") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'F0Label2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"questionPanel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'questionPanel'
    .setProperty(
      'Html','<br><br><br>Use the above Spring-Mass Simulator to conduct your experiments<br><br><br>') 
    // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'questionPanel'
      ;

  };

  return _view;
}