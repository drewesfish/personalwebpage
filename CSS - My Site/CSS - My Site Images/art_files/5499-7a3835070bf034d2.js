"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5499],{64063:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!==i--;){var a=o[i];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}},69463:function(e,t,n){n.d(t,{k:function(){return i}});var r=n(34155);function i(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(o()&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=0;(a=new Error(t.replace(/%s/g,(function(){return r[u++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}function o(){return"undefined"!==typeof r&&!0}},96793:function(e,t,n){function r(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!u(s))return!1;var d=e[s],l=t[s];if(!1===(i=n?n.call(r,d,l,s):void 0)||void 0===i&&d!==l)return!1}return!0}n.d(t,{w:function(){return r}})},76614:function(e,t,n){n.d(t,{J:function(){return a}});var r=n(10253),i=n(46964),o=n(34311);function a(e,t,n){return function(e,t,n){var a=(0,r.Z)((0,i.r)(e,t,n),2),u=a[0],c=a[1];return(0,o.L)((function(){var t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(c,{handlerIds:[t]})}),[e,c]),u}(t,e||function(){return{}},(function(){return n.reconnect()}))}},46964:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(64063),i=n.n(r),o=n(67294),a=n(34311);function u(e,t,n){var r=(0,o.useState)((function(){return t(e)})),u=r[0],c=r[1],s=(0,o.useCallback)((function(){var r=t(e);i()(u,r)||(c(r),n&&n())}),[u,e,n]);return(0,a.L)(s),[u,s]}},53201:function(e,t,n){n.d(t,{c:function(){return b}});var r=n(69463),i=n(76614),o=n(58636),a=n(67294);function u(e){return(0,a.useMemo)((function(){return e.hooks.dragSource()}),[e])}function c(e){return(0,a.useMemo)((function(){return e.hooks.dragPreview()}),[e])}var s=n(51438),d=n(52951),l=n(96793),f=n(48373),g=n(85462),h=function(){function e(t){var n=this;(0,s.Z)(this,e),this.hooks=(0,g.p)({dragSource:function(e,t){n.clearDragSource(),n.dragSourceOptions=t||null,(0,f.d)(e)?n.dragSourceRef=e:n.dragSourceNode=e,n.reconnectDragSource()},dragPreview:function(e,t){n.clearDragPreview(),n.dragPreviewOptions=t||null,(0,f.d)(e)?n.dragPreviewRef=e:n.dragPreviewNode=e,n.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}return(0,d.Z)(e,[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"reconnect",value:function(){var e=this.reconnectDragSource();this.reconnectDragPreview(e)}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return t&&this.disconnectDragSource(),this.handlerId?e?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t):(this.lastConnectedDragSource=e,t):t}},{key:"reconnectDragPreview",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.dragPreview,n=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();n&&this.disconnectDragPreview(),this.handlerId&&(t?n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions)):this.lastConnectedDragPreview=t)}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,l.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,l.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}}]),e}(),v=n(21641),p=n(34311);var y=!1,D=!1,k=function(){function e(t){(0,s.Z)(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}return(0,d.Z)(e,[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,r.k)(!y,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return y=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{y=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,r.k)(!D,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return D=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{D=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();var I=n(10253),O=n(75793),m=function(){function e(t,n,r){(0,s.Z)(this,e),this.spec=t,this.monitor=n,this.connector=r}return(0,d.Z)(e,[{key:"beginDrag",value:function(){var e=this.spec,t=this.monitor,n=null;return null!==(n="object"===typeof e.item?e.item:"function"===typeof e.item?e.item(t):{})&&void 0!==n?n:null}},{key:"canDrag",value:function(){var e=this.spec,t=this.monitor;return"boolean"===typeof e.canDrag?e.canDrag:"function"!==typeof e.canDrag||e.canDrag(t)}},{key:"isDragging",value:function(e,t){var n=this.spec,r=this.monitor,i=n.isDragging;return i?i(r):t===e.getSourceId()}},{key:"endDrag",value:function(){var e=this.spec,t=this.monitor,n=this.connector,r=e.end;r&&r(t.getItem(),t),n.reconnect()}}]),e}();function w(e,t,n){var i=(0,v.N)(),o=function(e,t,n){var r=(0,a.useMemo)((function(){return new m(e,t,n)}),[t,n]);return(0,a.useEffect)((function(){r.spec=e}),[e]),r}(e,t,n),u=function(e){return(0,a.useMemo)((function(){var t=e.type;return(0,r.k)(null!=t,"spec.type must be defined"),t}),[e])}(e);(0,p.L)((function(){if(null!=u){var e=(0,I.Z)((0,O.w)(u,o,i),2),r=e[0],a=e[1];return t.receiveHandlerId(r),n.receiveHandlerId(r),a}}),[i,t,n,o,u])}function b(e,t){var n=(0,o.w)(e,t);(0,r.k)(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");var s=function(){var e=(0,v.N)();return(0,a.useMemo)((function(){return new k(e)}),[e])}(),d=function(e,t){var n=(0,v.N)(),r=(0,a.useMemo)((function(){return new h(n.getBackend())}),[n]);return(0,p.L)((function(){return r.dragSourceOptions=e||null,r.reconnect(),function(){return r.disconnectDragSource()}}),[r,e]),(0,p.L)((function(){return r.dragPreviewOptions=t||null,r.reconnect(),function(){return r.disconnectDragPreview()}}),[r,t]),r}(n.options,n.previewOptions);return w(n,s,d),[(0,i.J)(n.collect,s,d),u(d),c(d)]}},21641:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(69463),i=n(67294),o=n(68548);function a(){var e=(0,i.useContext)(o.L).dragDropManager;return(0,r.k)(null!=e,"Expected drag drop context"),e}},88662:function(e,t,n){n.d(t,{L:function(){return m}});var r=n(76614),i=n(58636),o=n(67294);function a(e){return(0,o.useMemo)((function(){return e.hooks.dropTarget()}),[e])}var u=n(51438),c=n(52951),s=n(96793),d=n(48373),l=n(85462),f=function(){function e(t){var n=this;(0,u.Z)(this,e),this.hooks=(0,l.p)({dropTarget:function(e,t){n.clearDropTarget(),n.dropTargetOptions=t,(0,d.d)(e)?n.dropTargetRef=e:n.dropTargetNode=e,n.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}return(0,c.Z)(e,[{key:"connectTarget",get:function(){return this.dropTarget}},{key:"reconnect",value:function(){var e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();var t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}},{key:"receiveHandlerId",value:function(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(e){this.dropTargetOptionsInternal=e}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!(0,s.w)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}}]),e}(),g=n(21641),h=n(34311);var v=n(69463),p=!1,y=function(){function e(t){(0,u.Z)(this,e),this.targetId=null,this.internalMonitor=t.getMonitor()}return(0,c.Z)(e,[{key:"receiveHandlerId",value:function(e){this.targetId=e}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;(0,v.k)(!p,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return p=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{p=!1}}},{key:"isOver",value:function(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();var D=n(10253),k=n(75793);var I=function(){function e(t,n){(0,u.Z)(this,e),this.spec=t,this.monitor=n}return(0,c.Z)(e,[{key:"canDrop",value:function(){var e=this.spec,t=this.monitor;return!e.canDrop||e.canDrop(t.getItem(),t)}},{key:"hover",value:function(){var e=this.spec,t=this.monitor;e.hover&&e.hover(t.getItem(),t)}},{key:"drop",value:function(){var e=this.spec,t=this.monitor;if(e.drop)return e.drop(t.getItem(),t)}}]),e}();function O(e,t,n){var r=(0,g.N)(),i=function(e,t){var n=(0,o.useMemo)((function(){return new I(e,t)}),[t]);return(0,o.useEffect)((function(){n.spec=e}),[e]),n}(e,t),a=function(e){var t=e.accept;return(0,o.useMemo)((function(){return(0,v.k)(null!=e.accept,"accept must be defined"),Array.isArray(t)?t:[t]}),[t])}(e);(0,h.L)((function(){var e=(0,D.Z)((0,k.n)(a,i,r),2),o=e[0],u=e[1];return t.receiveHandlerId(o),n.receiveHandlerId(o),u}),[r,t,i,n,a.map((function(e){return e.toString()})).join("|")])}function m(e,t){var n=(0,i.w)(e,t),u=function(){var e=(0,g.N)();return(0,o.useMemo)((function(){return new y(e)}),[e])}(),c=function(e){var t=(0,g.N)(),n=(0,o.useMemo)((function(){return new f(t.getBackend())}),[t]);return(0,h.L)((function(){return n.dropTargetOptions=e||null,n.reconnect(),function(){return n.disconnectDropTarget()}}),[e]),n}(n.options);return O(n,u,c),[(0,r.J)(n.collect,u,c),a(c)]}},34311:function(e,t,n){n.d(t,{L:function(){return r}});var r=n(67294).useLayoutEffect},58636:function(e,t,n){n.d(t,{w:function(){return o}});var r=n(29815),i=n(67294);function o(e,t){var n=(0,r.Z)(t||[]);return null==t&&"function"!==typeof e&&n.push(e),(0,i.useMemo)((function(){return"function"===typeof e?e():e}),n)}},48373:function(e,t,n){function r(e){return null!==e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}n.d(t,{d:function(){return r}})},75793:function(e,t,n){function r(e,t,n){var r=n.getRegistry(),i=r.addTarget(e,t);return[i,function(){return r.removeTarget(i)}]}function i(e,t,n){var r=n.getRegistry(),i=r.addSource(e,t);return[i,function(){return r.removeSource(i)}]}n.d(t,{n:function(){return r},w:function(){return i}})},85462:function(e,t,n){n.d(t,{p:function(){return a}});var r=n(69463),i=n(67294);function o(e){if("string"!==typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(t," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function a(e){var t={};return Object.keys(e).forEach((function(n){var r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{var a=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,i.isValidElement)(t)){var r=t;return e(r,n),r}var a=t;o(a);var u=n?function(t){return e(t,n)}:e;return c(a,u)}}(r);t[n]=function(){return a}}})),t}function u(e,t){"function"===typeof e?e(t):e.current=t}function c(e,t){var n=e.ref;return(0,r.k)("string"!==typeof n,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n?(0,i.cloneElement)(e,{ref:function(e){u(n,e),u(t,e)}}):(0,i.cloneElement)(e,{ref:t})}}}]);
//# sourceMappingURL=5499-7a3835070bf034d2.js.map