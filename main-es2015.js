(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"callback\">\n    <div>\n\t<i class=\"fas fa-spinner\"></i>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"top-bar\" color=\"primary\">\n\t<img src=\"assets/logo.svg\" width=\"40PX\">\n\t<span style=\"color: white\">Taggit</span>\n  \n\t<button mat-icon-button [matMenuTriggerFor]=\"project\" color=\"foreground\" class=\"project-menu\">\n\t  <mat-icon>menu</mat-icon>\n\t</button>\n  \n  \n\t<mat-menu #project=\"matMenu\">\n\t  <span mat-menu-item *ngIf=\"selectedProject\">\n\t\tCurrent Project : {{selectedProject.name}}\n\t  </span>\n\t  <button mat-menu-item [matMenuTriggerFor]=\"projectList\">Select Project</button>\n\t  <button mat-menu-item (click)=\"openFilePicker()\">File Browser</button>\n\t</mat-menu>\n  \n\t<mat-menu #projectList=\"matMenu\">\n\t  <button mat-menu-item class=\"clickable\" *ngFor=\"let p of projects\" (click)=\"selectProject(p)\" [ngClass]=\"{'active-project': p === selectedProject}\">\n\t\t{{ p.name }}\n\t  </button>\n\t</mat-menu>\n  \n\t<span class=\"example-spacer\"></span>\n  \n\t<div *ngIf=\"showSidebar; else doThat\" class=\"path-buttons\">\n\t  <div class=\"slides\" style=\"line-height: 1; font-size: 12px\">\n\t\t{{imageName}}\n\t\t<div class=\"lr-buttons\" style=\"margin-top: 5px\">\n\t\t  <i (click)=\"otherPath(false)\" style=\"margin-right: 10px; cursor: pointer\" class=\"fas fa-angle-left\"></i>\n\t\t  <i (click)=\"otherPath(true)\" style=\"margin-left: 10px; cursor: pointer\" class=\"fas fa-angle-right\"></i>\n\t\t</div>\n\t  </div>\n\t</div>\n  \n\t<ng-template #doThat>\n\t  <!-- <input placeholder=\"Search images\" -->\n\t  <!--\t   name=\"\" -->\n\t  <!--\t   type=\"text\" -->\n\t  <!--\t   value=\"\" -->\n\t  <!--\t   class=\"goods\"/> -->\n  \n  \n\t  <!-- <mat-form-field appearance=\"fill\"> -->\n\t  <!--   <input matInput placeholder=\"Search\"> -->\n\t  <!-- </mat-form-field> -->\n  \n\t  <!-- <mat-form-field class=\"example-full-width\"> -->\n\t  <!--   <input matInput type=\"text\" -->\n\t  <!--\t\t [(ngModel)]=\"value\" -->\n\t  <!--\t\t placeholder=\"Search\"> -->\n\t  <!-- </mat-form-field> -->\n\t</ng-template>\n  \n\t<span class=\"example-spacer\"></span>\n  \n\t<div *ngIf=\"showGroup\" class=\"group-bar grid-x align-right\">\n\t  <button mat-raised-button\n\t\t\t  (click)=\"openAddGroupModal(addGroupModal)\">Add Group</button>\n  \n\t  <ng-template #addGroupModal>\n\t\t<mat-form-field>\n\t\t  <mat-label>Group Name</mat-label>\n\t\t  <input matInput placeholder=\"Group Name\" #groupInput>\n\t\t</mat-form-field>\n\t\t<br/>\n\t\t<br/>\n\t\t<button mat-raised-button matDialogClose color=\"primary\" (click)=\"addToGroupService(groupInput.value)\">Add Group</button>\n\t\t<button mat-button matDialogClose color=\"secondary\">Cancel</button>\n\t  </ng-template>\n\t</div>\n  \n\t<!-- <button *ngIf=\"groupsExist && showSidebar && activePane == 'preset'\" -->\n\t<!--\t\t  mat-button -->\n\t<!--\t\t  color=\"secondary\" -->\n\t<!--\t\t  (click)=\"goToRoute()\">Tagger</button> -->\n  \n\t<!-- <button *ngIf=\"groupsExist && showSidebar && activePane == 'tagger'\" -->\n\t<!--\t\t  mat-button -->\n\t<!--\t\t  color=\"secondary\" -->\n\t<!--\t\t  (click)=\"goToRoute()\">Preset</button> -->\n  \n  \n\t<button *ngIf=\"groupsExist && !showSidebar\"\n\t\t\tmat-raised-button\n\t\t\tstyle=\"margin-left: 15px\"\n\t\t\t(click)=\"openSidebar()\">Taggit!</button>\n  \n\t<button *ngIf=\"groupsExist && showSidebar\"\n\t\t\tmat-raised-button\n\t\t\tstyle=\"margin-left: 15px\"\n\t\t\t(click)=\"openSidebar()\">Gallery</button>\n  \n  \n  </mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"img-container\">\n  <img [ngClass]=\"status ? 'img-selected' : 'img-unselected'\"\n\t   [src]=\"featureSource\"\n\t   (click)=\"imageSelect()\"\n\t   class=\"img-responsive img-target\">\n\n  <div class=\"top-overlay\">\n\t<div class=\"image-option\"\n\t\t matTooltip=\"Zoom\"\n\t\t matTooltipPosition=\"below\"\n\t\t (click)=\"imageZoom(diffSizes)\">\n\t  <i class=\"fas fa-search-plus\"></i>\n\t</div>\n\n\t<ng-template #diffSizes>\n\t  <div class=\"zoom-content\">\n\t\t<div class=\"img-container\">\n\t\t  <img [src]=\"featureSource\">\n\t\t</div>\n\t\t<div class=\"img-details\">\n\t\t  <div class=\"detail-container\">\n\t\t\t<div class=\"title\">\n\t\t\t  Coordinates\n\t\t\t</div>\n\t\t\t<div class=\"detail-contents\">\n\t\t\t  <div class=\"detail-item\">\n\t\t\t\t{{coordinates[0]}},\n\t\t\t  </div>\n\t\t\t  <div class=\"detail-item\">\n\t\t\t\t{{coordinates[1]}}\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t  <div class=\"detail-container\">\n\t\t\t<div class=\"title\">\n\t\t\t  Path\n\t\t\t</div>\n\t\t\t<div class=\"detail-contents\">\n\t\t\t  <div class=\"detail-item\">\n\t\t\t\t{{featureSource}}\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<button mat-button class=\"close-button\" matDialogClose aria-label=\"Close modal\" type=\"button\">\n\t\t  <span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t  </div>\n\t</ng-template>\n\n\t<div class=\"image-option\"\n\t\t matTooltip=\"Remove\"\n\t\t matTooltipPosition=\"below\"\n\t\t (click)=\"openImageDeleteModal(deleteImage)\">\n\t  <i class=\"fas fa-trash\"></i>\n\t</div>\n\n\t<ng-template #deleteImage>\n\t  <div>\n\t  This image will be deleted from the current project. It will not be deleted from the Data Depot.\n\t  </div>\n\n\t  <button mat-raised-button color=\"primary\" matDialogClose (click)=\"imageDelete()\">Delete Image</button>\n\t  <button mat-button matDialogClose>Cancel</button>\n\t</ng-template>\n\n\n\n\t<div class=\"image-option\"\n\t\t matTooltip=\"Add To Group\"\n\t\t matTooltipPosition=\"below\"\n\t\t (click)=\"openImageAddModal(addMoreToGroup)\">\n\t  <i class=\"fas fa-plus\"></i>\n\t</div>\n\n\t<ng-template #addMoreToGroup>\n\t  <select #selectGroup class=\"form-control\" [value]=\"activeGroup\">\n\t\t<option *ngFor=\"let group of groupList\">\n\t\t  {{ group.name }}\n\t\t</option>\n\t  </select>\n\t  <button mat-button matDialogClose (click)=\"selectGroupForm(selectGroup.value)\">Add To Group</button>\n\n\t  <button mat-button matDialogClose aria-label=\"Close modal\" type=\"button\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t  </button>\n\t</ng-template>\n  </div>\n\n  <div class=\"bottom-overlay\">\n\n\t<!-- <div class=\"color-container\"> -->\n\t  <!-- TODO This should be an iff relationship -->\n\t  <div *ngIf=\"hasGroup && colors.length > 0\">\n\n\t\t<div *ngIf=\"colors.length < 5; else dotdot\" class=\"group-tags\">\n\t\t  <div *ngFor=\"let color of colors\"\n\t\t\t   class=\"center\"\n\t\t\t   (mouseover)=\"getGroupNameFromColor(color)\"\n\t\t\t   [matTooltip]=\"currentGroup\"\n\t\t\t   matTooltipPosition=\"below\">\n\t\t\t<svg class=\"box\" (click)=\"deleteFromGroup(color)\" width=\"15px\" height=\"15px\">\n\t\t\t  <rect width=\"15px\" height=\"15px\" [style.fill]=\"color\"/>\n\t\t\t</svg>\n\t\t  </div>\n\t\t</div>\n\n\t\t<ng-template #dotdot class=\"text\">\n\t\t  <div class=\"image-option\"\n\t\t\t   (click)=\"openMoreGroupsModal(moreGroupsModal)\">\n\t\t\t<i class=\"fas fa-ellipsis-h\"></i>\n\t\t  </div>\n\t\t</ng-template>\n\n\t\t<!-- TODO Should close modal once zero groups -->\n\t\t<ng-template #moreGroupsModal>\n\t\t  <div style=\"display: flex; justify-content: center; align-items: center\">\n\t\t\t<div *ngFor=\"let color of colors\"\n\t\t\t\t class=\"center\"\n\t\t\t\t style=\"display: flex\"\n\t\t\t\t (mouseover)=\"getGroupNameFromColor(color)\"\n\t\t\t\t [matTooltip]=\"currentGroup\"\n\t\t\t\t matTooltipPosition=\"right\">\n\t\t\t  <svg style=\"padding: 1\" (click)=\"deleteFromGroup(color)\" width=\"15px\" height=\"15px\">\n\t\t\t\t<rect width=\"15px\" height=\"15px\" [style.fill]=\"color\"/>\n\t\t\t  </svg>\n\t\t\t</div>\n\t\t  </div>\n\t\t</ng-template>\n\n\t  </div>\n\t<!-- </div> -->\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"gallery-container\">\n\t<div [ngClass]=\"status ? 'success' : 'danger'\"\n\t\t infiniteScroll\n\t\t [infiniteScrollDistance]=\"1\"\n\t\t [infiniteScrollThrottle]=\"1500\"\n\t\t (scrolled)=\"onScroll()\"\n\t\t class=\"img-list-container\"\n\t\t *ngIf=\"!showSidebar; else elseBlock\">\n\t  <app-image-box\n\t\t*ngFor=\"let feat of featureListScroll\"\n\t\t[feature]=\"feat\">\n\t  </app-image-box>\n\t</div>\n  \n\t<!-- <ngx-spinner\n\t  bdOpacity = 0.9\n\t  bdColor = \"\"\n\t  size = \"default\"\n\t  color = \"#3ADB76\"\n\t  type = \"line-scale-pulse-out\"\n\t  [fullScreen] = \"false\">\n\t</ngx-spinner> -->\n\t<ng-template #elseBlock>\n\t\t<app-via></app-via>\n\t  \t<!-- <div class=\"imager\">\n\t\t\t  \n\n\t\t<img class=\"view-image\" [src]=\"getPath()\">\n\n\t  </div>   -->\n\n\t  <!-- <div (click)=\"otherPath(1)\">next</div> -->\n\t  <!-- <div (click)=\"otherPath(-1)\">prev</div> -->\n  \n  \n\t  <!-- <img [src]=\"getPath()\"> -->\n\t  <!-- <button class=\"button\" (click)=\"otherPath(1)\">next</button> -->\n\t  <!-- <button class=\"button\" (click)=\"otherPath(-1)\">prev</button> -->\n  \n\t  <!-- <app-image-list> -->\n\t  <!--   <\\!-- *ngFor=\"let feat of features.features\" -\\-> -->\n\t  <!--   <\\!-- [feature]=\"feat\" -\\-> -->\n  \n\t  <!--   <\\!-- *ngFor=\"let feat of features.features\" -\\-> -->\n\t  <!--   <\\!-- [feature]=\"features.features\" -\\-> -->\n\t  <!--   <\\!-- (clickRequest)=\"addGroupList($event)\" -\\-> -->\n\t  <!-- </app-image-list> -->\n  \n\t</ng-template>\n\n\t<div *ngIf=\"showSidebar\" class=\"side-bar-container\">\n\t  <!-- <app-via></app-via> -->\n\t  <app-side-bar></app-side-bar>\n\n\n\t</div>\n\t<!-- <div *ngIf=\"showSidebar\">\n\t\t<app-via></app-via>\n\t\t <app-side-bar></app-side-bar> -->\n  \n  \n\t  <!-- </div> --> \n\n\n\n\n  </div>\n  \n  <!-- <div id=\"gallery-container\"> -->\n\t<!--   <div [ngClass]=\"status ? 'success' : 'danger'\"> -->\n\t  <!--\t<div class=\"img-list-container\" *ngIf=\"!showSidebar; else elseBlock\"> -->\n\t\t<!--\t  <app-image-box -->\n\t\t<!--\t\t*ngFor=\"let feat of features.features\" -->\n\t\t<!--\t\t[feature]=\"feat\" -->\n\t\t<!--\t\t(clickRequest)=\"addGroupList($event)\"> -->\n\t\t  <!--\t  </app-image-box> -->\n\t\t<!--\t</div> -->\n  \n\t  <!--\t<ng-template #elseBlock> -->\n\t\t<!--\t  <app-image-list> -->\n\t\t  <!--\t  </app-image-list> -->\n\t\t<!--\t</ng-template> -->\n  \n\t  <!--   </div> -->\n\t<!--   <div *ngIf=\"showSidebar\" class=\"side-bar-container\"> -->\n\t  <!--\t<app-side-bar></app-side-bar> -->\n\t  <!--   </div> -->\n\t<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"grid-x\"> -->\n\n<!--   <div class=\"top-bar\" style=\"background-color: black\" id=\"navbar\"> -->\n\n<!--\t<div class=\"top-bar-left\"> -->\n<!--\t  <img src=\"assets/logo.svg\" width=\"30PX\"> -->\n<!--\t  <span style=\"color: white\">Taggit</span> -->\n<!--\t</div> -->\n\n\n<!--\t<div class=\"top-bar-right\"> -->\n<!--\t  <div class=\"light-blue\" *ngIf=\"currentUser\">{{ currentUser.username }}</div> -->\n<!--\t</div> -->\n\n<!--   </div> -->\n\n<!--   <\\!-- <div class=\"cell control-bar\"> -\\-> -->\n<!--   <\\!--\t<app-control-bar></app-control-bar> -\\-> -->\n<!--   <\\!-- </div> -\\-> -->\n<!-- </div> -->\n\n<app-control-bar></app-control-bar>\n<!-- NOTE Router Outlet was here -->\n<app-image-gallery></app-image-gallery>\n\n<!-- NOTE Leaflet was here -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\" style=\"min-height: calc(100vh - 67px)\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4> Select Files </h4>\n<small><em> Note: Only files are selectable, not folders. Double click on a folder to navigate into it. </em></small>\n<hr>\n<select (ngModelChange)=\"selectSystem($event)\" [(ngModel)]=\"selectedSystem\">\n\t<option [ngValue]=\"myDataSystem\"> My Data </option>\n\t<option [ngValue]=\"communityDataSystem\"> Community Data</option>\n\t<option [ngValue]=\"publishedDataSystem\"> Published Data</option>\n\t<optgroup label=\"My Projects\">\n\t\t<option *ngFor=\"let project of projects\" [ngValue]=\"project\">{{project.description}}</option>\n\t</optgroup>\n</select>\n<div class=\"fileslisting\">\n\t<div class=\"grid-x\" *ngIf=\"inProgress\">\n\t\t<div class=\"cell medium-12\">\n\t\t\t<i class=\"fas fa-spin fa-atom\"></i>\n\t\t</div>\n\t</div>\n\t<div class=\"grid-x file-row\" *ngFor=\"let file of filesList\" [ngClass]=\"{'selected':selectedFiles.has(file.path)}\">\n\t\t<div class=\"cell medium-9 clickable\" (click)=\"select(file)\"  (dblclick)=\"browse(file)\">\n\t\t\t<i class=\"fas fa-folder\" *ngIf=\"file.type === 'dir'\" ></i>\n\t\t\t<i class=\"far fa-file\" *ngIf=\"file.type !== 'dir'\"></i>\n\t\t\t<span > {{ file.name }} </span>\n\t\t</div>\n\t\t<div class=\"cell medium-3\">\n\t\t\t{{file.length | filesize }}\n\t\t</div>\n\t</div>\n</div>\n<div>\n\t<button mat-raised-button color=\"warn\" class=\"button warning\" (click)=\"cancel()\">Cancel</button>\n\t<button mat-raised-button color=\"primary\" class=\"button\" [disabled]=\"!selectedFiles.size\" (click)=\"chooseFiles()\">Import</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  notfound works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-group\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Groups</div>\n  <div *ngIf=\"showSubitem\" class=\"subitem group-subitem\">\n\t<!-- TODO redundant functionality radio is just for style -->\n\t<form class=\"boxed\">\n\t  <div *ngFor=\"let group of groupList\" (click)=\"selectGroupForm(group.name)\" class=\"box form\">\n\t\t<input type=\"radio\" [id]=\"group.name\" [value]=\"group.name\" name=\"skills\" [checked]=\"isChecked(group.name)\">\n\t\t<label class=\"group-container\" style=\"cursor: pointer\" [for]=\"group.name\">\n\t\t  <div class=\"name-group\">\n\t\t\t{{group.name}}\n\t\t\t<svg class=\"box\" width=\"10px\" height=\"10px\">\n\t\t\t  <rect width=\"10px\" height=\"10px\" style=\"fill: #ffffff\"/>\n\t\t\t  <rect width=\"8px\" height=\"8px\" x=\"1px\" y=\"1px\" [style.fill]=\"group.color\"/>\n\t\t\t</svg>\n\t\t  </div>\n\t\t  <div class=\"button-group\">\n\t\t\t<div (click)=\"deleteGroup(group.name)\">\n\t\t\t  <i class=\"fas fa-minus\"\n\t\t\t\t matTooltip=\"Delete\"\n\t\t\t\t matTooltipPosition=\"below\">\n\t\t\t  </i>\n\t\t\t</div>\n\t\t\t<div (click)=\"openRenameModal(renameModal, group.name)\">\n\t\t\t  <i class=\"fas fa-edit\"\n\t\t\t\t matTooltip=\"Rename\"\n\t\t\t\t matTooltipPosition=\"below\">\n\t\t\t  </i>\n\t\t\t</div>\n\t\t  </div>\n\t\t</label>\n\t  </div>\n\t</form>\n\n\t<ng-template #renameModal>\n\t  <input matInput #groupRename\n\t\t\t placeholder=\"Rename Group\"\n\t\t\t (keyup.enter)=\"renameGroup(groupRename.value)\">\n\t  <br/>\n\t  <br/>\n\t  <div class=\"button-group\">\n\t\t<button matDialogClose color=\"primary\" mat-raised-button (click)=\"renameGroup(groupRename.value)\">Rename</button>\n\t\t<button matDialogClose mat-button>Cancel</button>\n\t  </div>\n\t</ng-template>\n  </div> <!-- subitem -->\n</div> <!-- select-group -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"asset-list\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">Image List</div>\n\n  <div *ngIf=\"showSubitem\" class=\"subitem asset-subitem\">\n\n\t<div *ngFor=\"let asset of getActiveFeatures()\" (click)=\"jumpToImage(asset)\" class=\"asset-container\" [ngClass]=\"{'highlight': isActiveFeature(asset)}\">\n\n\t  <div class=\"name-group\">\n\t\t{{ getAssetDisplay(asset) }}\n\t  </div>\n\n\t  <div class=\"button-group\">\n\t\t<div (click)=\"deleteAsset(asset.id)\">\n\t\t  <i class=\"fas fa-minus\"\n\t\t\t matTooltip=\"Delete\"\n\t\t\t matTooltipPosition=\"above\">\n\t\t  </i>\n\t\t</div>\n\t  </div>\n\t</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <p>side-bar works!</p> -->\n<!-- <app-preset-generator></app-preset-generator> -->\n<!-- <app-tagger></app-tagger> -->\n<app-select-group></app-select-group>\n<app-select-image></app-select-image>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"create-prompt\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\n\t<span>\n\t  Create Tag\n\t</span>\n\t<!-- <span style=\"cursor: pointer\" -->\n\t<!--\t  (click)=\"addFormItem(); clearLabel(); clearOption()\" -->\n\t<!--\t  matTooltip=\"Add Form Item\" -->\n\t<!--\t  style=\"cursor: pointer; margin-right: 20px\" -->\n\t<!--\t  matTooltipPosition=\"above\"> -->\n\t<!--   <i class=\"fas fa-plus\"></i> -->\n\t<!-- </span> -->\n  </div> <!-- subitem-title -->\n\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\n\t<form class=\"form-type-form\">\n\t  <div *ngFor=\"let control of enabledControls; let idx = index\" class=\"box form\">\n\t\t<input type=\"radio\" [id]=\"control\" value=\"control.toLowerCase()\" name=\"form-type\" [checked]=\"(idx === 0)\" (change)=\"selectInputForm(control.toLowerCase())\">\n\t\t<label style=\"cursor: pointer; margin: 3px; padding: 3px; font-size: 10px\" [for]=\"control\">{{ control }}</label>\n\t  </div> <!-- form-type-form -->\n\t</form>\n\n\t<div *ngIf=\"formType == 'text'; else optionForms\">\n\t  <div class=\"form-name\">\n\t\t<mat-form-field class=\"input-label-group\">\n\t\t  <mat-label>Label</mat-label>\n\t\t  <input matInput placeholder=\"Label\" #labelValue [(ngModel)]=\"labelFilter\" (keyup)=\"inputFormLabel($event)\" name=\"labelFilter\" class=\"tiny\" type=\"text\">\n\t\t</mat-form-field>\n\t  </div> <!--form-name -->\n\t</div> <!-- formtype -->\n\n\t<ng-template #optionForms>\n\t  <div class=\"form-name\">\n\n\t\t<mat-form-field class=\"input-label-group\">\n\t\t  <mat-label>Label</mat-label>\n\t\t  <input matInput placeholder=\"Label\" #labelValue [(ngModel)]=\"labelFilter\" (keyup)=\"inputFormLabel($event)\" name=\"labelFilter\" class=\"tiny\" type=\"text\">\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"input-label-group\">\n\t\t  <mat-label>Options</mat-label>\n\t\t  <div class=\"input-group\">\n\t\t\t<input matInput #optionValue class=\"input-group-field\" placeholder=\"Option\" type=\"text\" [(ngModel)]=\"optionFilter\" name=\"optionFilter\">\n\t\t  </div> <!-- input-group -->\n\t\t</mat-form-field>\n\n\t\t<div class=\"input-group-button\">\n\t\t  <button mat-button color=\"accent\" class=\"button\" (click)=\"addOptionItem(optionValue.value); optionValue.value = ''; clearOption()\">\n\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t  </button>\n\t\t</div> <!-- input-group-button -->\n\n\t\t<ul class=\"form-option-container\">\n\t\t  <li *ngFor=\"let opt of formOptions\" class=\"list-group\">\n\t\t\t<div [className]=\"showOpt\">\n\t\t\t  {{opt.label}}\n\t\t\t</div> <!-- showopt -->\n\t\t\t<div class=\"button-group\">\n\t\t\t  <div (click)=\"deleteOption(opt)\">\n\t\t\t\t<i class=\"fas fa-minus\"\n\t\t\t\t   matTooltip=\"Delete\"\n\t\t\t\t   matTooltipPosition=\"above\"\n\t\t\t\t   style=\"cursor: pointer\">\n\t\t\t\t</i>\n\t\t\t  </div> <!-- delete opt -->\n\n\t\t\t  <div (click)=\"openRenameOptionModal(renameOptionModal)\">\n\t\t\t\t<i class=\"fas fa-edit\"\n\t\t\t\t   style=\"cursor: pointer\"\n\t\t\t\t   matTooltip=\"Rename\"\n\t\t\t\t   matTooltipPosition=\"above\">\n\t\t\t\t</i>\n\t\t\t  </div>\n\n\t\t\t  <ng-template #renameOptionModal>\n\t\t\t\t<input matInput #optionRename\n\t\t\t\t\t   placeholder=\"Rename Option\">\n\t\t\t\t<br/>\n\t\t\t\t<br/>\n\t\t\t\t<div class=\"button-group\">\n\t\t\t\t  <button matDialogClose\n\t\t\t\t\t\t  mat-raised-button\n\t\t\t\t\t\t  color=\"primary\"\n\t\t\t\t\t\t  (click)=\"renameOption(opt, optionRename.value)\">Rename</button>\n\t\t\t\t  <button matDialogClose\n\t\t\t\t\t\t  mat-button>Cancel</button>\n\t\t\t\t</div>\n\t\t\t  </ng-template>\n\n\t\t\t</div> <!-- button group -->\n\n\t\t  </li>\n\t\t</ul>\n\t  </div> <!-- form name -->\n\t</ng-template> <!-- form options -->\n\n\t<button mat-raised-button color=\"primary\" (click)=\"addFormItem(); clearLabel(); clearOption()\">Save</button>\n\t<button mat-button color=\"primary\" (click)=\"cancelCreate(); clearLabel(); clearOption()\">Cancel</button>\n\n  </div> <!-- subitem -->\n</div> <!-- create-group -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <label for=\"\"> -->\n<!--   Name: -->\n<!--   <\\!-- {{field.label}} -\\-> -->\n<!--   <input name=\"\" [formControl]=\"name\"/> -->\n<!-- </label> -->\n\n<div [formGroup]=\"form\">\n  <!-- <label [attr.for]=\"field.label\">{{field.label}}</label> -->\n\n  <div [ngSwitch]=\"field.type\" class=\"form-controls\">\n\t<mat-form-field *ngSwitchCase=\"'text'\">\n\t  <input matInput color=\"primary\" [formControlName]=\"field.label\"\n\t\t\t [id]=\"field.label\" [type]=\"field.type\">\n\t</mat-form-field>\n\n\t<mat-form-field *ngSwitchCase=\"'dropdown'\">\n\t  <mat-select [id]=\"field.label\" [id]=\"field.label\" [formControlName]=\"field.label\">\n\t\t<mat-option *ngFor=\"let opt of field.options\" [value]=\"opt.label\">\n\t\t  {{opt.label}}\n\t\t</mat-option>\n\t  </mat-select>\n\t</mat-form-field>\n\n\t<ng-container *ngSwitchCase=\"'radio'\">\n\t  <mat-radio-group [formControlName]=\"field.label\" class=\"radio-group\">\n\t\t<mat-radio-button *ngFor=\"let opt of field.options\" class=\"input-group\" type=\"radio\" [value]=\"opt.label\">\n\t\t  {{opt.label}}\n\t\t</mat-radio-button>\n\t  </mat-radio-group>\n\t</ng-container>\n\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\n\t  <div *ngFor=\"let opt of field.options\" [id]=\"field.label\" class=\"input-group\">\n\t\t<mat-checkbox type=\"checkbox\" [value]=\"opt.label\" [formControlName]=\"field.label\">\n\t\t  {{opt.label}}\n\t\t</mat-checkbox>\n\t  </div>\n\t</ng-container>\n\n  </div>\n\n  <div class=\"errorMessage\" *ngIf=\"!isValid\">{{field.label}} is required</div>\n</div>\n\n\n\n\n\n\n\n<!-- <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\"> -->\n<!--   <div *ngFor=\"let field of formsService.activeFormList | async\"> -->\n<!--   <\\!-- <div *ngFor=\"let field of fields\"> -\\-> -->\n<!--\t<\\!-- <app-form-fields [field]=\"field\" [form]=\"form\"></app-form-fields> -\\-> -->\n<!--   </div> -->\n<!-- </form> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tag-forms\">\n  <div class=\"subitem-title\" (click)=\"expandPanel()\">\n\t<span>\n\t  Tag Images\n\t</span>\n\t<span>\n\t  <span style=\"cursor: pointer\"\n\t\t\tmatTooltip=\"Export Tags\"\n\t\t\tstyle=\"cursor: pointer; margin-right: 10px\"\n\t\t\tmatTooltipPosition=\"above\">\n\t\t<i class=\"fas fa-file-download\"></i>\n\t  </span>\n\n\t  <span style=\"cursor: pointer\"\n\t\t\t(click)=\"createNewTag()\"\n\t\t\tmatTooltip=\"Add New Tag\"\n\t\t\tstyle=\"cursor: pointer; margin-right: 10px\"\n\t\t\tmatTooltipPosition=\"above\">\n\t\t<i class=\"fas fa-plus\"></i>\n\t  </span>\n\n\t  <span style=\"cursor: pointer; margin-right: 20px\"\n\t\t\tmatTooltip=\"Save Tags\"\n\t\t\tmatTooltipPosition=\"above\">\n\t\t<i class=\"fas fa-save\"></i>\n\t  </span>\n\t</span>\n  </div> <!-- subitem-title -->\n\n  <div *ngIf=\"showSubitem\" class=\"subitem\">\n\t<div class=\"subitem-scroll\">\n\t  <div *ngIf=\"(formsService.activeFormList | async)?.length > 0; else elseBlock\">\n\t\t<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"formsService.formGroup | async\">\n <!--  -->\n\t\t  <div *ngFor=\"let form of formsService.activeFormList | async\" class=\"main-form-container\">\n\t\t\t<div class=\"form-item-container\">\n\n\t\t\t  <div class=\"name-group\">\n\t\t\t\t{{form.label}} ({{form.type}})\n\t\t\t  </div> <!-- name-group -->\n\n\t\t\t  <div class=\"button-group\">\n\n\t\t\t\t<div (click)=\"formsService.deleteForm(activeGroup, form)\">\n\t\t\t\t  <i class=\"fas fa-minus\"\n\t\t\t\t\t matTooltip=\"Delete\"\n\t\t\t\t\t matTooltipPosition=\"above\"\n\t\t\t\t\t style=\"cursor: pointer\">\n\t\t\t\t  </i>\n\t\t\t\t</div>\n\n\t\t\t\t<div (click)=\"openRenameOptionModal(renameFormItemModal)\">\n\t\t\t\t  <i class=\"fas fa-edit\"\n\t\t\t\t\t matTooltip=\"Rename\"\n\t\t\t\t\t matTooltipPosition=\"above\"\n\t\t\t\t\t style=\"cursor: pointer\">\n\t\t\t\t  </i>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"form.type != 'text'\">\n\n\t\t\t\t  <div (click)=\"openOptionToggle(form.label)\">\n\t\t\t\t\t<i class=\"fas fa-ellipsis-h\"\n\t\t\t\t\t   style=\"cursor: pointer\"\n\t\t\t\t\t   matTooltip=\"More Options\"\n\t\t\t\t\t   matTooltipPosition=\"above\">\n\t\t\t\t\t</i>\n\t\t\t\t  </div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<ng-template #renameFormItemModal>\n\t\t\t\t  <input matInput #formItemRename\n\t\t\t\t\t\t placeholder=\"Rename Form Item\">\n\t\t\t\t  <br/>\n\t\t\t\t  <br/>\n\t\t\t\t  <div class=\"button-group\">\n\t\t\t\t\t<button matDialogClose\n\t\t\t\t\t\t\tmat-raised-button\n\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t(click)=\"formsService.renameForm(activeGroup, form, formItemRename.value)\">Rename</button>\n\t\t\t\t\t<button matDialogClose\n\t\t\t\t\t\t\tmat-button>Cancel</button>\n\t\t\t\t  </div>\n\t\t\t\t</ng-template>\n\n\t\t\t  </div> <!-- button group -->\n\t\t\t</div>  <!-- form-item-container -->\n\n\n\n\t\t\t<div *ngIf=\"form.options.length && form.type != 'text' && openOption[form.label]\" class=\"options-container\">\n\n\t\t\t  <div *ngFor=\"let opt of form.options\" class=\"list-group list-suboptions\">\n\t\t\t\t<div>\n\t\t\t\t  {{opt.label}}\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"button-group\">\n\n\t\t\t\t  <div (click)=\"formsService.deleteOption(activeGroup, opt, form)\">\n\t\t\t\t\t<i class=\"fas fa-minus\"\n\t\t\t\t\t   style=\"cursor: pointer\"\n\t\t\t\t\t   matTooltip=\"Delete\"\n\t\t\t\t\t   matTooltipPosition=\"below\">\n\t\t\t\t\t</i>\n\t\t\t\t  </div>\n\n\t\t\t\t  <div (click)=\"openRenameOptionModal(renameDeeperOptionModal)\">\n\t\t\t\t\t<i class=\"fas fa-edit\"\n\t\t\t\t\t   matTooltip=\"Rename\"\n\t\t\t\t\t   style=\"cursor: pointer\"\n\t\t\t\t\t   matTooltipPosition=\"below\">\n\t\t\t\t\t</i>\n\t\t\t\t  </div>\n\n\t\t\t\t  <ng-template #renameDeeperOptionModal>\n\t\t\t\t\t<input matInput #optionDeeperRename\n\t\t\t\t\t\t   placeholder=\"Rename Option\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t  <button matDialogClose\n\t\t\t\t\t\t\t  mat-raised-button\n\t\t\t\t\t\t\t  color=\"primary\"\n\t\t\t\t\t\t\t  (click)=\"formsService.renameOption(activeGroup, opt, form, optionDeeperRename.value)\">Rename</button>\n\t\t\t\t\t  <button matDialogClose\n\t\t\t\t\t\t\t  mat-button>Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t  </ng-template>\n\t\t\t\t</div> <!-- button-ggroup -->\n\t\t\t  </div> <!-- option loop -->\n\t\t\t</div> <!-- options container -->\n\n\n\t\t\t<!-- <app-form-generator [form]=\"form\"></app-form-generator> -->\n\t\t\t<app-form-generator [field]=\"form\"></app-form-generator>\n\t\t\t<!-- Conditional -->\n\t\t\t<!-- <div *ngIf=\"(formsService.activeFormList | async)?.length > 0; else elseBlock\"> -->\n\t\t\t  <!-- Does not work without this -->\n\t\t\t  <!-- <div *ngIf=\"fields\"> -->\n\t\t\t\t<!-- <app-form-generator></app-form-generator> -->\n\t\t\t\t<!-- <app-form-generator [fields]=\"getFields()\"></app-form-generator> -->\n\t\t\t\t<!-- <app-form-generator [fields]=\"fields\"></app-form-generator> -->\n\t\t\t\t<!-- </div> -->\n\t\t\t  <!-- </div> -->\n\n\n\t\t  </div> <!-- loop -->\n\n\t\t  <div class=\"form-row\">\n\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n\t\t  </div>\n\t\t</form>\n\t  </div> <!-- conditional -->\n\t</div> <!-- subitem scroll -->\n  </div> <!--subitem -->\n\n  <ng-template #elseBlock>\n\tNo tag presets for this Group!\n  </ng-template>\n\n</div> <!-- tag-forms -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/via/via.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/via/via.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n\n    <title>VGG Image Annotator</title>\n    <meta name=\"author\" content=\"Abhishek Dutta\">\n    <meta name=\"description\" content=\"VIA is a standalone image annotator application packaged as a single HTML file (< 400 KB) that runs on most modern web browsers.\">\n\n\n  </head>\n  <!-- <script src=\"../../../assets/via.component.js\"></script> -->\n\n  <body>  \n    <!-- <div (resized)=\"onResized($event)\"></div> -->\n    <!--\n        SVG icon set definitions\n        Material icons downloaded from https://material.io/icons\n      -->\n    <svg style=\"display:none;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <defs>\n        <symbol id=\"shape_rectangle\">\n          <title>Rectangular region shape</title>\n          <rect width=\"20\" height=\"12\" x=\"6\" y=\"10\" stroke-width=\"2\"></rect>\n        </symbol>\n        <symbol id=\"shape_circle\">\n          <title>Circular region shape</title>\n          <circle r=\"10\" cx=\"16\" cy=\"16\" stroke-width=\"2\"></circle>\n        </symbol>\n        <symbol id=\"shape_ellipse\">\n          <title>Elliptical region shape</title>\n          <ellipse rx=\"12\" ry=\"8\" cx=\"16\" cy=\"16\" stroke-width=\"2\"></ellipse>\n        </symbol>\n        <symbol id=\"shape_polygon\">\n          <title>Polygon region shape</title>\n          <path d=\"M 15.25,2.2372 3.625,11.6122 6,29.9872 l 20.75,-9.625 2.375,-14.75 z\" stroke-width=\"2\"></path>\n        </symbol>\n        <symbol id=\"shape_point\">\n          <title>Point region shape</title>\n          <circle r=\"3\" cx=\"16\" cy=\"16\" stroke-width=\"2\"></circle>\n        </symbol>\n        <symbol id=\"shape_polyline\">\n          <title>Polyline region shape</title>\n          <path d=\"M 2,12 10,24 18,12 24,18\" stroke-width=\"2\"></path>\n          <circle r=\"1\" cx=\"2\" cy=\"12\" stroke-width=\"2\"></circle>\n          <circle r=\"1\" cx=\"10\" cy=\"24\" stroke-width=\"2\"></circle>\n          <circle r=\"1\" cx=\"18\" cy=\"12\" stroke-width=\"2\"></circle>\n          <circle r=\"1\" cx=\"24\" cy=\"18\" stroke-width=\"2\"></circle>\n        </symbol>\n\n        <!-- Material icons downloaded from https://material.io/icons -->\n        <symbol id=\"icon_settings\">\n          <path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"></path>\n        </symbol>\n        <symbol id=\"icon_save\">\n          <path d=\"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"></path>\n        </symbol>\n        <symbol id=\"icon_open\">\n          <path d=\"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\"></path>\n        </symbol>\n        <symbol id=\"icon_gridon\">\n          <path d=\"M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z\"></path>\n        </symbol>\n        <symbol id=\"icon_gridoff\">\n          <path d=\"M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z\"></path>\n        </symbol>\n        <symbol id=\"icon_next\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n        </symbol>\n        <symbol id=\"icon_prev\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n        </symbol>\n        <symbol id=\"icon_list\">\n          <path d=\"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z\"></path>\n        </symbol>\n        <symbol id=\"icon_zoomin\">\n          <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"></path>\n          <path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\"/>\n        </symbol>\n        <symbol id=\"icon_zoomout\">\n          <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z\"></path>\n        </symbol>\n        <symbol id=\"icon_copy\">\n          <path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"></path>\n        </symbol>\n        <symbol id=\"icon_paste\">\n          <path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path>\n        </symbol>\n        <symbol id=\"icon_pasten\">\n          <path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path>\n          <text x=\"8\" y=\"18\">n</text>\n        </symbol>\n        <symbol id=\"icon_pasteundo\">\n          <path d=\"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z\"></path>\n          <text x=\"8\" y=\"18\">x</text>\n        </symbol>\n        <symbol id=\"icon_selectall\">\n          <path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z\"></path>\n        </symbol>\n        <symbol id=\"icon_close\">\n          <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>\n        </symbol>\n        <symbol id=\"icon_insertcomment\">\n          <path d=\"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path>\n        </symbol>\n        <symbol id=\"icon_checkbox\">\n          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"></path>\n        </symbol>\n        <symbol id=\"icon_fileupload\">\n          <path d=\"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z\"></path>\n        </symbol>\n        <symbol id=\"icon_filedownload\">\n          <path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"></path>\n        </symbol>\n      </defs>\n    </svg>\n\n    <!-- used by invoke_with_user_inputs() to gather user inputs -->\n    <div id=\"user_input_panel\"></div>\n\n    <!-- to show status messages -->\n    <div id=\"message_panel\">\n      <div id=\"message_panel_content\" class=\"content\"></div>\n    </div>\n\n    <!-- spreadsheet like editor for annotations -->\n    <div id=\"annotation_editor_panel\">\n      <div class=\"button_panel\">\n        <span class=\"text_button\" onclick=\"edit_region_metadata_in_annotation_editor()\" id=\"button_edit_region_metadata\" title=\"Manual annotations of regions\">Region Annotations</span>\n        <span class=\"text_button\" onclick=\"edit_file_metadata_in_annotation_editor()\" id=\"button_edit_file_metadata\" title=\"Manual annotations of a file\">File Annotations</span>\n\n        <span class=\"button\" style=\"float:right;margin-right:0.2rem;\" onclick=\"annotation_editor_toggle_all_regions_editor()\" title=\"Close this window of annotation editor\">&times;</span>\n        <span class=\"button\" style=\"float:right;margin-right:0.2rem;\" onclick=\"annotation_editor_increase_panel_height()\" title=\"Increase the height of this panel\">&#x02191;</span>\n        <span class=\"button\" style=\"float:right;margin-right:0.2rem;\" onclick=\"annotation_editor_decrease_panel_height()\" title=\"Decrease the height of this panel\">&#x02193;</span>\n        <span class=\"button\" style=\"float:right;margin-right:0.2rem;\" onclick=\"annotation_editor_increase_content_size()\" title=\"Increase size of contents in annotation editor\">&#x2b;</span>\n        <span class=\"button\" style=\"float:right;margin-right:0.2rem;\" onclick=\"annotation_editor_decrease_content_size()\" title=\"Decrease size of contents in annotation editor\">&#x2212;</span>\n      </div>\n      <!-- here, a child div with id=\"annotation_editor\" is added by javascript -->\n    </div>\n\n    <div class=\"top_panel\" id=\"ui_top_panel\">\n      <!-- menu bar -->\n      <div class=\"menubar\">\n        <ul>\n          <li onclick=\"show_home_panel()\" style=\"cursor:pointer;\">Home</li>\n          <li>Project\n            <ul>\n              <li onclick=\"project_open_select_project_file()\" title=\"Load a VIA project (from a JSON file)\">Load</li>\n              <li onclick=\"project_save_with_confirm()\" title=\"Save this VIA project (as a JSON file)\">Save</li>\n              <li onclick=\"settings_panel_toggle()\" title=\"Show/edit project settings\">Settings</li>\n              <li class=\"submenu_divider\"></li>\n              <li onclick=\"sel_local_images()\" title=\"Add images locally stored in this computer\">Add local files</li>\n              <li onclick=\"project_file_add_url_with_input()\" title=\"Add images from a web URL (e.g. http://www.robots.ox.ac.uk/~vgg/software/via/images/swan.jpg)\">Add files from URL</li>\n              <li onclick=\"project_file_add_abs_path_with_input()\" title=\"Add images using absolute path of file (e.g. /home/abhishek/image1.jpg)\">Add file using absolute path</li>\n              <li onclick=\"sel_local_data_file('files_url')\" title=\"Add images from a list of web url or absolute path stored in a text file (one url or path per line)\">Add url or path from text file</li>\n              <li onclick=\"project_file_remove_with_confirm()\" title=\"Remove selected file (i.e. file currently being shown)\">Remove file</li>\n              <li class=\"submenu_divider\"></li>\n              <li onclick=\"sel_local_data_file('attributes')\" title=\"Import region and file attributes from a JSON file\">Import region/file attributes</li>\n              <li onclick=\"project_save_attributes()\" title=\"Export region and file attributes to a JSON file\">Export region/file attributes</li>\n            </ul>\n          </li>\n\n          <li>Annotation\n            <ul>\n              <li onclick=\"download_all_region_data('csv')\" title=\"Export annotations to a CSV file\">Export Annotations (as csv)</li>\n              <li onclick=\"download_all_region_data('json')\" title=\"Export annotaitons to a JSON file\">Export Annotations (as json)</li>\n              <li onclick=\"download_all_region_data('coco', 'json')\" title=\"Export annotaitons to COCO (http://cocodataset.org) format\">Export Annotations (COCO format)</li>\n              <li onclick=\"\" class=\"submenu_divider\"></li>\n              <li onclick=\"sel_local_data_file('annotations')\" title=\"Import annotations from a CSV file\">Import Annotations (from csv)</li>\n              <li onclick=\"sel_local_data_file('annotations')\" title=\"Import annotations from a JSON file\">Import Annotations (from json)</li>\n              <li onclick=\"sel_local_data_file('annotations_coco')\" title=\"Import annotations from a COCO (http://cocodataset.org) formatted JSON file\">Import Annotations (COCO format)</li>\n\n              <li class=\"submenu_divider\"></li>\n              <li onclick=\"show_annotation_data()\" title=\"Show a preview of annotations (opens in a new browser windows)\">Preview Annotations</li>\n              <li onclick=\"download_as_image()\" title=\"Download an image containing the annotations\">Download as Image</li>\n            </ul>\n          </li>\n\n          <li>View\n            <ul>\n              <!-- <li onclick=\"image_grid_toggle()\" title=\"Toggle between single image view and image grid view\">Toggle image grid view</li>\n              <li onclick=\"leftsidebar_toggle()\" title=\"Show or hide the sidebar shown in left hand side\">Toggle left sidebar</li> -->\n<li onclick=\"toggle_img_fn_list_visibility()\" title=\"Show or hide a panel to update annotations corresponding to file and region\">Toggle image filename list</li>\n              <li class=\"submenu_divider\"></li>\n              <li onclick=\"toggle_attributes_editor()\" title=\"Show or hide a panel to update file and region attributes\">Toggle attributes editor</li>\n              <li onclick=\"annotation_editor_toggle_all_regions_editor()\" title=\"Show or hide a panel to update annotations corresponding to file and region\">Toggle annotation editor (Space)</li>\n              <li class=\"submenu_divider\"></li>\n              <li onclick=\"toggle_region_boundary_visibility()\" title=\"Show or hide the region boundaries\">Show/hide region boundaries (b)</li>\n              <li onclick=\"toggle_region_id_visibility()\" title=\"Show or hide the region id labels\">Show/hide region labels (l)</li>\n              <li onclick=\"toggle_region_info_visibility()\" title=\"Show or hide the image coordinates\">Show/hide region info.</li>\n            </ul>\n          </li>\n\n          <li>Help\n            <ul>\n              <li onclick=\"set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_GETTING_STARTED)\" title=\"Show a guide to get started with this application\">Getting Started</li>\n              <li title=\"Visit the project page for this application\"><a href=\"http://www.robots.ox.ac.uk/~vgg/software/via/\" target=\"_blank\">VGG Project Page</a></li>\n              <li onclick=\"\" title=\"Report an issue to the developers of this application (requires an account at gitlab.com)\"><a href=\"https://gitlab.com/vgg/via/issues\" target=\"_blank\">Report issues</a></li>\n              <li class=\"submenu_divider\"></li>\n              <li><a target=\"_blank\" href=\"https://gitlab.com/vgg/via/blob/master/Contributors.md\" title=\"List of people who have contributed towards the development of VIA\">Contributors</a></li>\n              <li onclick=\"set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_LICENSE)\" title=\"View license of this application\">License</li>\n              <li onclick=\"set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_ABOUT)\" title=\"Show more details about this application\">About VIA</li>\n            </ul>\n          </li>\n        </ul>\n      </div> <!-- end of menubar -->\n\n      <!-- Shortcut toolbar -->\n      <div class=\"toolbar\">\n        <!-- <svg onclick=\"project_open_select_project_file()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_open\"></use><title>Open Project</title></svg> -->\n        <svg onclick=\"project_save_with_confirm()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_save\"></use><title>Save Project</title></svg>\n        <svg onclick=\"settings_panel_toggle()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_settings\"></use><title>Update Project Settings</title></svg>\n        <!--\n        <svg onclick=\"\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_checkbox\"></use><title>Locate Files</title></svg>\n        -->\n\n        <svg onclick=\"sel_local_data_file('annotations')\" style=\"margin-left:1rem;\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_fileupload\"></use><title>Import Annotations from CSV</title></svg>\n        <svg onclick=\"download_all_region_data('csv')\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_filedownload\"></use><title>Download Annotations as CSV</title></svg>\n<!-- \n        <svg onclick=\"image_grid_toggle()\" id=\"toolbar_image_grid_toggle\" style=\"margin-left:1rem;\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_gridon\"></use><title>Switch to Image Grid View</title></svg>\n        <svg onclick=\"annotation_editor_toggle_all_regions_editor()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_insertcomment\"></use><title>Toggle Annotation Editor</title></svg> -->\n\n        <!-- <svg onclick=\"move_to_prev_image()\" style=\"margin-left:1rem;\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_prev\"></use><title>Previous</title></svg>\n        <svg onclick=\"toggle_img_fn_list_visibility()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_list\"></use><title>Toggle Filename List</title></svg> -->\n        <!-- <svg onclick=\"move_to_next_image()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_next\"></use><title>Next</title></svg> -->\n<!-- \n        <svg onclick=\"zoom_in()\" style=\"margin-left:1rem;\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_zoomin\"></use><title>Zoom In</title></svg>\n        <svg onclick=\"zoom_out()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_zoomout\"></use><title>Zoom Out</title></svg> -->\n<!-- \n        <svg onclick=\"sel_all_regions()\" viewbox=\"0 0 24 24\" style=\"margin-left:1rem;\"><use xlink:href=\"#icon_selectall\"></use><title>Select All Regions</title></svg>\n        <svg onclick=\"copy_sel_regions()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_copy\"></use><title>Copy Regions</title></svg>\n        <svg onclick=\"paste_sel_regions_in_current_image()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_paste\"></use><title>Paste Regions</title></svg>\n        <svg onclick=\"paste_to_multiple_images_with_confirm()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_pasten\"></use><title>Paste Region in Multiple Images</title></svg>\n        <svg onclick=\"del_sel_regions_with_confirm()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_pasteundo\"></use><title>Undo Regions Pasted in Multiple Images</title></svg>\n        <svg onclick=\"del_sel_regions()\" viewbox=\"0 0 24 24\"><use xlink:href=\"#icon_close\"></use><title>Delete Region</title></svg> -->\n      </div>\n      <!-- end of shortcut toolbar -->\n      <input type=\"file\" id=\"invisible_file_input\" name=\"files[]\" style=\"display:none\">\n    </div> <!-- endof #top_panel -->\n\n    <!-- Middle Panel contains a left-sidebar and image display areas -->\n    <div class=\"middle_panel\">\n      <!-- this panel contains a button to shows the left side bar -->\n      <!-- <div id=\"leftsidebar_collapse_panel\">\n        <span class=\"text_button\" onclick=\"leftsidebar_toggle()\" title=\"Show left sidebar\">&#x25B8;</span>\n      </div> -->\n\n      <div id=\"leftsidebar\">\n        <!-- <div class=\"leftsidebar_accordion_panel show\" style=\"float:right; border:2px solid #f2f2f2;\">\n          <span class=\"text_button\" onclick=\"leftsidebar_decrease_width()\" title=\"Reduce width of this toolbar panel\">&#x2190;</span>\n          <span class=\"text_button\" onclick=\"leftsidebar_increase_width()\" title=\"Increase width of this toolbar panel\">&#x2192;</span>\n          <span class=\"text_button\" onclick=\"leftsidebar_toggle()\" title=\"Show/hide this toolbar panel\">&#x25C2;</span>\n        </div> -->\n\n        <button class=\"leftsidebar_accordion active\">Region Shape</button>\n        <div class=\"leftsidebar_accordion_panel show\">\n          <ul class=\"region_shape\">\n            <li id=\"region_shape_rect\" class=\"selected\" onclick=\"select_region_shape('rect')\" title=\"Rectangle (Shortcut key 1)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_rectangle\"></use></svg></li>\n            <li id=\"region_shape_circle\" onclick=\"select_region_shape('circle')\" title=\"Circle (Shortcut key 2)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_circle\"></use></svg></li>\n            <li id=\"region_shape_ellipse\" onclick=\"select_region_shape('ellipse')\" title=\"Ellipse (Shortcut key 3)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_ellipse\"></use></svg></li>\n            <li id=\"region_shape_polygon\" onclick=\"select_region_shape('polygon')\" title=\"Polygon (Shortcut key 4)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_polygon\"></use></svg></li>\n            <li id=\"region_shape_point\" onclick=\"select_region_shape('point')\" title=\"Point (Shortcut key 5)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_point\"></use></svg></li>\n            <li id=\"region_shape_polyline\" onclick=\"select_region_shape('polyline')\" title=\"Polyline (Shortcut key 6)\"><svg height=\"32\" viewbox=\"0 0 32 32\"><use xlink:href=\"#shape_polyline\"></use></svg></li>\n          </ul>\n          <div id=\"region_info\" class=\"display_none\">&nbsp;</div>\n        </div>\n\n        <!-- Project -->\n        <button class=\"leftsidebar_accordion active\" id=\"project_panel_title\">Project</button>\n        <div class=\"leftsidebar_accordion_panel show\" id=\"img_fn_list_panel\">\n          <div id=\"project_info_panel\">\n            <div class=\"row\">\n              <span class=\"col\"><label for=\"project_name\">Name: </label></span>\n              <span class=\"col\"><input type=\"text\" value=\"\" onchange=\"project_on_name_update(this)\" id=\"project_name\" title=\"VIA project name\"></span>\n            </div>\n          </div>\n          <div id=\"project_tools_panel\">\n            <div class=\"button_panel\" style=\"margin:0.1rem 0;\" >\n              <select style=\"width:48%\" id=\"filelist_preset_filters_list\" onchange=\"img_fn_list_onpresetfilter_select()\" title=\"Filter file list using predefined filters\">\n                <option value=\"all\">All files</option>\n                <option value=\"files_without_region\">Show files without regions</option>\n                <option value=\"files_missing_region_annotations\">Show files missing region annotations</option>\n                <option value=\"files_missing_file_annotations\">Show files missing file annotations</option>\n                <option value=\"files_error_loading\">Files that could not be loaded</option>\n                <option value=\"regex\">Regular Expression</option>\n              </select>\n              <input style=\"width:50%\" type=\"text\" placeholder=\"regular expression\" oninput=\"img_fn_list_onregex()\" id=\"img_fn_list_regex\" title=\"Filter using regular expression\">\n            </div>\n          </div>\n          <div id=\"img_fn_list\"></div>\n            <div class=\"button_panel\">\n              <span class=\"button\" onclick=\"sel_local_images()\" title=\"Add new file from local disk\">Add Files</span>\n              <span class=\"button\" onclick=\"project_file_add_url_with_input()\" title=\"Add new file using URL\">Add URL</span>\n              <span class=\"button\" onclick=\"project_file_remove_with_confirm()\" title=\"Remove selected file (i.e. file currently being shown) from project\">Remove</span>\n            </div>\n          \n        </div>\n\n        <!-- Attributes -->\n        <button class=\"leftsidebar_accordion\" id=\"attributes_editor_panel_title\">Attributes</button>\n        <div class=\"leftsidebar_accordion_panel\" id=\"attributes_editor_panel\">\n          <div class=\"button_panel\" style=\"padding:1rem 0;\">\n            <span class=\"text_button\" onclick=\"show_region_attributes_update_panel()\" id=\"button_show_region_attributes\" title=\"Show region attributes\">Region Attributes</span>\n            <span class=\"text_button\" onclick=\"show_file_attributes_update_panel()\" id=\"button_show_file_attributes\" title=\"Show file attributes\">File Attributes</span>\n          </div>\n          <div id=\"attributes_update_panel\">\n            <div class=\"button_panel\">\n              <input style=\"width:70%\" type=\"text\" placeholder=\"attribute name\" id=\"user_input_attribute_id\" value=\"\">\n              <span id=\"button_add_new_attribute\" class=\"button\" onclick=\"add_new_attribute_from_user_input()\" title=\"Add new attribute\">&#x2b;</span>\n              <span id=\"button_del_attribute\" class=\"button\" onclick=\"delete_existing_attribute_with_confirm()\" title=\"Delete existing attribute\">&minus;</span>\n            </div>\n            <div class=\"button_panel\" style=\"margin:0.1rem 0;\" >\n              <select style=\"width:100%\" id=\"attributes_name_list\" onchange=\"update_current_attribute_id(this)\" title=\"List of existing attributes\"></select>\n            </div>\n            <div id=\"attribute_properties\"></div>\n            <div id=\"attribute_options\"></div>\n            <p style=\"text-align:center\">\n              <span class=\"text_button\" title=\"Show a spreadsheet like editor for all manual annotations\" onclick=\"annotation_editor_toggle_all_regions_editor()\">Toggle Annotation Editor</span>\n            </p>\n          </div>\n        </div>\n\n        <button class=\"leftsidebar_accordion\">Keyboard Shortcuts</button>\n        <div class=\"leftsidebar_accordion_panel\">\n          <div style=\"display:block; text-align:center; padding:1rem;\">Available only on image focus</div>\n          <table>\n            <tr>\n              <td style=\"width:8em;\"><span class=\"key\">&larr;</span>&nbsp;<span class=\"key\">&uarr;</span>&nbsp;<span class=\"key\">&rarr;</span>&nbsp;<span class=\"key\">&darr;</span></td>\n              <td>Move selected region by 1 px (Shift to jump)</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">a</span></td>\n              <td>Select all regions</td>\n            </tr>\n\n            <tr>\n              <td><span class=\"key\">c</span></td>\n              <td>Copy selected regions</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">v</span></td>\n              <td>Paste selected regions</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">d</span></td>\n              <td>Delete selected regions</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">Ctrl</span> + Wheel</td>\n              <td>Zoom in/out (mouse cursor is over image)</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">l</span></td>\n              <td>Toggle region label</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">b</span></td>\n              <td>Toggle region boundary</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">Enter</span></td>\n              <td>Finish drawing polyshape</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">Backspace</span></td>\n              <td>Delete last polyshape vertex</td>\n            </tr>\n          </table>\n\n          <div style=\"display:block; text-align:center; padding:1rem;\">Always Available</div>\n          <table>\n            <tr>\n              <td style=\"width:8em;\"><span class=\"key\">&larr;</span>&nbsp;<span class=\"key\">&rarr;</span></td>\n              <td>Move to next/previous image</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">+</span>&nbsp;<span class=\"key\">-</span>&nbsp;<span class=\"key\">=</span></td>\n              <td>Zoom in/out/reset</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">&uarr;</span></td>\n              <td>Update region label</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">&darr;</span></td>\n              <td>Update region colour</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">Spacebar</span></td>\n              <td>Toggle annotation editor (Ctrl to toggle on image editor)</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">Home</span> / <span class=\"key\">h</span></td>\n              <td>Jump to first image</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">End</span> / <span class=\"key\">e</span></td>\n              <td>Jump to last image</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">PgUp</span> / <span class=\"key\">u</span></td>\n              <td>Jump several images</td>\n            </tr>\n            <tr>\n              <td><span class=\"key\">PgDown</span> / <span class=\"key\">d</span></td>\n              <td>Jump several images</td>\n            </tr>\n\n            <tr>\n              <td><span class=\"key\">Esc</span></td>\n              <td>Cancel ongoing task</td>\n            </tr>\n          </table>\n        </div>\n\n      </div> <!-- end of leftsidebar -->\n\n      <!-- Main display area: contains image canvas, ... -->\n      <div id=\"display_area\">\n        <div id=\"image_panel\" class=\"display_area_content display_none\">\n          <!-- buffer images using <img> element will be added here -->\n\n\t\t        <!-- <img [src]=\"getPath()\" id=\"region_canvas\"> -->\n\n          <!-- @todo: in future versions, this canvas will be replaced by a <svg> element -->\n            <canvas id=\"region_canvas\" width=\"1\" height=\"1\" tabindex=\"1\">Sorry, your browser does not support HTML5 Canvas functionality which is required for this application.</canvas>\n            <!-- here, a child div with id=\"annotation_editor\" is added by javascript -->\n        </div>\n        <div id=\"image_grid_panel\" class=\"display_area_content display_none\">\n\n          <div id=\"image_grid_group_panel\">\n            <span class=\"tool\">Group by&nbsp; <select id=\"image_grid_toolbar_group_by_select\" onchange=\"image_grid_toolbar_onchange_group_by_select(this)\"></select></span>\n          </div>\n\n          <div id=\"image_grid_toolbar\">\n            <span>Selected</span>\n            <span id=\"image_grid_group_by_sel_img_count\">0</span>\n            <span>of</span>\n            <span id=\"image_grid_group_by_img_count\">0</span>\n            <span>images in current group, show</span>\n\n            <span>\n              <select id=\"image_grid_show_image_policy\" onchange=\"image_grid_onchange_show_image_policy(this)\">\n                <option value=\"all\">all images (paginated)</option>\n                <option value=\"first_mid_last\">only first, middle and last image</option>\n                <option value=\"even_indexed\">even indexed images (i.e. 0,2,4,...)</option>\n                <option value=\"odd_indexed\">odd indexed images (i.e. 1,3,5,...)</option>\n                <option value=\"gap5\">images 1, 5, 10, 15,...</option>\n                <option value=\"gap25\">images 1, 25, 50, 75, ...</option>\n                <option value=\"gap50\">images 1, 50, 100, 150, ...</option>\n              </select>\n            </span>\n\n            <div id=\"image_grid_nav\"></div>\n          </div>\n\n          <div id=\"image_grid_content\">\n            <div id=\"image_grid_content_img\"></div>\n            <svg xmlns:xlink=\"http://www.w3.org/2000/svg\" id=\"image_grid_content_rshape\"></svg>\n          </div>\n\n          <div id=\"image_grid_info\">\n          </div>\n        </div> <!-- end of image grid panel -->\n\n        <div id=\"settings_panel\" class=\"display_area_content display_none\">\n          <h2>Settings</h2>\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Project Name</div>\n            </div>\n\n            <div class=\"value\">\n              <input type=\"text\" id=\"_via_settings.project.name\"/>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Default Path</div>\n              <div class=\"desc\">If all images in your project are saved in a single folder, set the default path to the location of this folder. The VIA application will load images from this folder by default. Note: a default path of <code>\"./\"</code> indicates that the folder containing <code>via.html</code> application file also contains the images in this project. For example: <code>/datasets/VOC2012/JPEGImages/</code> or <code>C:\\Documents\\data\\</code>&nbsp;<strong>(note the trailing <code>/</code> and <code>\\</code></strong>)</div>\n            </div>\n\n            <div class=\"value\">\n              <input type=\"text\" id=\"_via_settings.core.default_filepath\" placeholder=\"/datasets/pascal/voc2012/VOCdevkit/VOC2012/JPEGImages/\"/>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Search Path List</div>\n              <div class=\"desc\">If you define multiple paths, all these folders will be searched to find images in this project. We do not recommend this approach as it is computationally expensive to search for images in multiple folders. <ol id=\"_via_settings.core.filepath\"></ol></div>\n            </div>\n\n            <div class=\"value\">\n              <input type=\"text\" id=\"settings_input_new_filepath\" placeholder=\"/datasets/pascal/voc2012/VOCdevkit/VOC2012/JPEGImages\"/>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Region Label</div>\n              <div class=\"desc\">By default, each region in an image is labelled using the region-id. Here, you can select a more descriptive labelling of regions.</div>\n            </div>\n\n            <div class=\"value\">\n              <select id=\"_via_settings.ui.image.region_label\"></select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Region Colour</div>\n              <div class=\"desc\">By default, each region is drawn using a single colour. Using this setting, you can assign a unique colour to regions grouped according to a region attribute.</div>\n            </div>\n\n            <div class=\"value\">\n              <select id=\"_via_settings.ui.image.region_color\"></select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Region Label Font</div>\n              <div class=\"desc\">Font size and font family for showing region labels.</div>\n            </div>\n\n            <div class=\"value\">\n              <input id=\"_via_settings.ui.image.region_label_font\" placeholder=\"12px Arial\"/>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">Preload Buffer Size</div>\n              <div class=\"desc\">Images are preloaded in buffer to allow smoother navigation of next/prev images. A large buffer size may slow down the overall browser performance. To disable preloading, set buffer size to 0.</div>\n            </div>\n            <div class=\"value\">\n              <input type=\"text\" id=\"_via_settings.core.buffer_size\" />\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"variable\">\n              <div class=\"name\">On-image Annotation Editor</div>\n              <div class=\"desc\">When a single region is selected, the on-image annotation editor is gets activated which the user to update annotations of this region. By default, this on-image annotation editor is placed near the selected region.</div>\n            </div>\n\n            <div class=\"value\">\n              <select id=\"_via_settings.ui.image.on_image_annotation_editor_placement\">\n                <option value=\"NEAR_REGION\">close to selected region</option>\n                <option value=\"IMAGE_BOTTOM\">at the bottom of image being annotated</option>\n                <option value=\"DISABLE\">DISABLE on-image annotation editor</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"border:none;\">\n            <button onclick=\"settings_save()\" value=\"save_settings\" style=\"margin-top:2rem\">Save</button>\n            <button onclick=\"settings_panel_toggle()\" value=\"cancel_settings\" style=\"margin-left:2rem;\">Cancel</button>\n          </div>\n        </div> <!-- end of settings panel -->\n\n        <div id=\"page_404\" class=\"display_area_content display_none narrow_page_content\">\n          <h2>File Not Found</h2>\n          <p>Filename: <span style=\"font-family:Mono;\" id=\"page_404_filename\"></span></p>\n\n          <p>We recommend that you update the default path in <span class=\"text_button\" title=\"Show Project Settings\" onclick=\"settings_panel_toggle()\">project settings</span> to the folder which contains this image.</p>\n\n          <p>A temporary fix is to use <span class=\"text_button\" title=\"Load or Add Images\" onclick=\"sel_local_images()\">browser's file selector</span> to manually locate and add this file. We do not recommend this approach because it requires you to repeat this process every time your load this project in the VIA application.</p>\n        </div> <!-- end of file not found panel -->\n\n        <div id=\"page_start_info\" class=\"display_area_content display_none narrow_page_content\">\n          <ul>\n            <li>To start annotation, <span class=\"text_button\" title=\"Load or Add Images\" onclick=\"sel_local_images()\">select images</span> (or, add images from <span class=\"text_button\" title=\"Add images from a web URL (e.g. http://www.robots.ox.ac.uk/~vgg/software/via/images/swan.jpg)\" onclick=\"project_file_add_url_with_input()\">URL</span> or <span class=\"text_button\" title=\"Add images using absolute path of file (e.g. /home/abhishek/image1.jpg)\" onclick=\"project_file_add_abs_path_with_input()\">absolute path</span>) and draw regions</li>\n            <li>Use <span class=\"text_button\" title=\"Toggle attributes editor panel\" onclick=\"toggle_attributes_editor()\">attribute editor</span> to define attributes (e.g. name) and <span class=\"text_button\" title=\"Toggle annotations editor panel\" onclick=\"annotation_editor_toggle_all_regions_editor()\">annotation editor</span> to describe each region (e.g. cat) using these attributes.</li>\n            <li>Remember to <span class=\"text_button\" onclick=\"project_save_with_confirm()\">save</span> your project before closing this application so that you can <span class=\"text_button\" onclick=\"project_open_select_project_file()\">load</span> it later to continue annotation.</li>\n            <li>For help, see the <span class=\"text_button\" onclick=\"set_display_area_content(VIA_DISPLAY_AREA_CONTENT_NAME.PAGE_GETTING_STARTED)\">Getting Started</span> page and pre-loaded demo: <a href=\"http://www.robots.ox.ac.uk/~vgg/software/via/via_demo.html\">image annotation</a> and <a href=\"http://www.robots.ox.ac.uk/~vgg/software/via/via_face_demo.html\">face annotation</a>.</li>\n          </ul>\n\n        </div>\n\n      </div> <!-- end of display_area -->\n    </div> <!-- end of middle_panel -->\n\n    <!-- this vertical spacer is needed to allow scrollbar to show\n         items like Keyboard Shortcut hidden under the attributes panel -->\n    <div style=\"width: 100%;\" id=\"vertical_space\"></div>\n\n<!-- START: Contents of file: src/demo/_via_basic_demo.js-->\n<!-- END: Contents of file: via.js-->\n<!-- <script>src = \"via.components.js\" </script> -->\n<!-- <script src=\"../../../assets/js/via.component.js\"></script> -->\n\n </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Activate, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activate", function() { return Activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-bar/tag-generator/tag-generator.component */ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
/* harmony import */ var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/side-bar/tag-images/tag-images.component */ "./src/app/components/side-bar/tag-images/tag-images.component.ts");







// import { TaggerComponent } from './components/tagger/tagger.component';
// import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';


let Activate = class Activate {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    canActivate(route, state) {
        if (this.authSvc.isLoggedIn()) {
            return true;
        }
        this.authSvc.login();
    }
};
Activate.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Activate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], Activate);

const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], canActivate: [Activate], children: [
            // {path: '', redirectTo: '/tagger', pathMatch: 'full'},
            // TODO IAN cache value on parent route
            // {path: 'gallery', component: ImageGalleryComponent, canActivateChild: [Activate]},
            // {path: 'tagger', component: TaggerComponent, canActivateChild: [Activate]},
            // {path: 'preset', component: PresetGeneratorComponent, canActivateChild: [Activate]}
            { path: 'tagger', component: _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_8__["TagImagesComponent"], canActivateChild: [Activate] },
            { path: 'preset', component: _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_7__["TagGeneratorComponent"], canActivateChild: [Activate] }
        ] },
    { path: 'callback', component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_6__["CallbackComponent"] },
    { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [Activate]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'viewer';
    }
    ngOnInit() {
        this.authService.login();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.interceptors.ts":
/*!*************************************!*\
  !*** ./src/app/app.interceptors.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor, TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], AuthInterceptor);

let TokenInterceptor = class TokenInterceptor {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    intercept(request, next) {
        if (request.url.indexOf('https://agave.designsafe-ci.org') > -1) {
            if (this.authSvc.isLoggedIn()) {
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + this.authSvc.userToken.token
                    }
                });
            }
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");
/* harmony import */ var ngx_filesize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-filesize */ "./node_modules/ngx-filesize/dist/index.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/control-bar/control-bar.component */ "./src/app/components/control-bar/control-bar.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _app_interceptors__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app.interceptors */ "./src/app/app.interceptors.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/modal-file-browser/modal-file-browser.component */ "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/image-gallery/image-gallery.component */ "./src/app/components/image-gallery/image-gallery.component.ts");
/* harmony import */ var _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/image-box/image-box.component */ "./src/app/components/image-box/image-box.component.ts");
/* harmony import */ var _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/side-bar/tag-images/form-generator/form-generator.component */ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/side-bar/select-group/select-group.component */ "./src/app/components/side-bar/select-group/select-group.component.ts");
/* harmony import */ var _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/side-bar/select-image/select-image.component */ "./src/app/components/side-bar/select-image/select-image.component.ts");
/* harmony import */ var _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/side-bar/tag-generator/tag-generator.component */ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts");
/* harmony import */ var _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/side-bar/tag-images/tag-images.component */ "./src/app/components/side-bar/tag-images/tag-images.component.ts");
/* harmony import */ var _components_via_via_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/via/via.component */ "./src/app/components/via/via.component.ts");





// CommonModule for dynamic field































// import { TaggerComponent } from './components/tagger/tagger.component';
// import { PresetGeneratorComponent } from './components/preset-generator/preset-generator.component';



// import { ImageListComponent } from './components/image-list/image-list.component';





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_25__["MapComponent"], _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_26__["MainComponent"],
            _components_control_bar_control_bar_component__WEBPACK_IMPORTED_MODULE_28__["ControlBarComponent"],
            _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_30__["CallbackComponent"],
            _components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__["ModalFileBrowserComponent"],
            _components_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_35__["ImageGalleryComponent"],
            // TaggerComponent,
            // PresetGeneratorComponent,
            _components_image_box_image_box_component__WEBPACK_IMPORTED_MODULE_36__["ImageBoxComponent"],
            _components_side_bar_tag_images_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_37__["FormGeneratorComponent"],
            _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_38__["SideBarComponent"],
            // ImageListComponent,
            _components_side_bar_select_group_select_group_component__WEBPACK_IMPORTED_MODULE_39__["SelectGroupComponent"],
            _components_side_bar_select_image_select_image_component__WEBPACK_IMPORTED_MODULE_40__["SelectImageComponent"],
            _components_side_bar_tag_generator_tag_generator_component__WEBPACK_IMPORTED_MODULE_41__["TagGeneratorComponent"],
            _components_side_bar_tag_images_tag_images_component__WEBPACK_IMPORTED_MODULE_42__["TagImagesComponent"],
            _components_via_via_component__WEBPACK_IMPORTED_MODULE_43__["ViaComponent"],
        ],
        imports: [
            // this is for the ng-tapis library
            ng_tapis__WEBPACK_IMPORTED_MODULE_22__["ApiModule"].forRoot({ rootUrl: 'https://agave.designsafe-ci.org/' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_19__["NgxMasonryModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            ngx_filesize__WEBPACK_IMPORTED_MODULE_21__["FileSizeModule"],
            ngx_foundation__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            angular_resize_event__WEBPACK_IMPORTED_MODULE_20__["AngularResizedEventModule"],
        ],
        providers: [
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                multi: true,
                useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_31__["AuthInterceptor"]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                multi: true,
                useClass: _app_interceptors__WEBPACK_IMPORTED_MODULE_31__["TokenInterceptor"]
            },
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"],
                useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].baseHref
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
        entryComponents: [_components_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_33__["ModalFileBrowserComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/callback/callback.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/callback/callback.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");




let CallbackComponent = class CallbackComponent {
    constructor(route, auth) {
        this.route = route;
        this.auth = auth;
    }
    ngOnInit() {
        // TODO: For some reason wso2 is sending back a fragment like #access_token=qadad&expires_in=3600
        const frag = this.route.snapshot.fragment;
        const params = new URLSearchParams(frag);
        const token = params.get('access_token');
        const expires_in = +params.get('expires_in');
        this.auth.setToken(token, expires_in);
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/callback/callback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./callback.component.scss */ "./src/app/components/callback/callback.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], CallbackComponent);



/***/ }),

/***/ "./src/app/components/control-bar/control-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/control-bar/control-bar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .current-project {\n  padding: 30px;\n  font-size: 14px;\n}\n:host .goods {\n  height: 27px;\n  margin: 0px;\n  padding: 0px;\n}\n:host .toggler {\n  margin-left: 10px;\n}\n:host .picker {\n  display: inline-block;\n}\n:host .group-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .path-buttons {\n  text-align: center;\n}\n:host .project-menu {\n  margin-left: 10px;\n}\n:host .top-bar {\n  position: fixed;\n  margin-top: -50px;\n  height: 50px;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n:host .my-button {\n  border-radius: 5px;\n  padding: 5px;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n  }\n}\n:host .example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1iYXIvY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9xdWVubnkvRGVza3RvcC90YWdnaXQvc3JjL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtYmFyL2NvbnRyb2wtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0QseUJDYmE7QUNEZDtBRmtCQztFQUNFLG1CQUFBO0FFaEJIO0FGNEJFO0VBQ0QsU0FBQTtBRTFCRDtBRjZCRTtFQUNELGFBQUE7RUFDQSxlQUFBO0FFM0JEO0FGOEJFO0VBQ0QsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FFNUJEO0FGK0JFO0VBQ0QsaUJBQUE7QUU3QkQ7QUZnQ0U7RUFDRCxxQkFBQTtBRTlCRDtBRmlDRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBRS9CRDtBRmtDRTtFQUNELGtCQUFBO0FFaENEO0FGbUNFO0VBQ0QsaUJBQUE7QUVqQ0Q7QUZvQ0U7RUFDRCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBT0EsWUFBQTtBRXhDRDtBRjJDRTtFQUVELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRTFDRDtBRjZDRTtFQUNELGtCQUFBO0VBQ0EsWUFBQTtBRTNDRDtBRjhDRTtFQUNEO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtZQUFBLGNBQUE7RUU1Q0Q7QUFDRjtBRitDRTtFQUNELG1CQUFBO1VBQUEsY0FBQTtBRTdDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1iYXIvY29udHJvbC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAvLyBtYXJnaW4tdG9wIDQwcHhcbiAgLy8gZGlzcGxheSBibG9ja1xuICAvLyBmb250LXNpemUgMC44ZW1cbiAgLy8gaGVpZ2h0IDI3cHhcbiAgLy8gdmVydGljYWwtYWxpZ24gY2VudGVyXG4gIC8vIHdpZHRoIDEwMCVcbiAgLy8gei1pbmRleCA5OTlcbiAgLy8gYmFja2dyb3VuZC1jb2xvciAjZmZmXG5cbiAgLy8gTk9URSBsb3QtbGFuLWxhYmVsIHdhcyBoZXJlXG5cbiAgLmFjdGl2ZS1wcm9qZWN0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGdyZWVuQWN0aXZlO1xuICB9XG5cbiAgLm1lbnUge1xuXHRidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcblx0ICBwYWRkaW5nOiAwLjg1ZW0gMWVtO1xuXHR9XG4gIH1cblxuXG4gIC8vIC5tZW51LmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xuICAvL1x0ei1pbmRleDogMTAwMDA7XG4gIC8vIH1cblxuICAvLyBOT1RFIHN3aXRjaCB3YXMgaGVyZVxuXG4gIC8vIE5PVEUgdGlueSB3YXMgaGVyZVxuICAuYnV0dG9uLnRpbnkge1xuXHRtYXJnaW46IDA7XG4gIH1cblxuICAuY3VycmVudC1wcm9qZWN0IHtcblx0cGFkZGluZzogMzBweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmdvb2RzIHtcblx0aGVpZ2h0OiAyN3B4O1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogMHB4O1xuICB9XG5cbiAgLnRvZ2dsZXIge1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5waWNrZXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuZ3JvdXAtYmFyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5wYXRoLWJ1dHRvbnMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucHJvamVjdC1tZW51IHtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAudG9wLWJhciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bWFyZ2luLXRvcDogLTUwcHg7XG5cdGhlaWdodDogNTBweDtcblx0Ly8gcGFkZGluZzogNXB4O1xuXHQvLyBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuXHQvLyBmbGV4LXdyYXA6IG5vd3JhcDtcblx0Ly8gcG9zaXRpb246IGZpeGVkO1xuXHQvLyAvLyBvdmVyZmxvdzogaGlkZGVuO1xuXHQvLyB3aWR0aDogMTAwJTtcblx0ei1pbmRleDogOTk5O1xuICB9XG5cbiAgLnRvcC1iYXItcmlnaHRcbiAgLnRvcC1iYXItbGVmdCB7XG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRmbGV4OiAwIDEgYXV0bztcblx0bWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm15LWJ1dHRvbiB7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0cGFkZGluZzogNXB4O1xuICB9XG5cbiAgQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcblx0LnRvcC1iYXIge1xuXHQgIGZsZXgtd3JhcDogbm93cmFwO1xuXHQgIGZsZXg6IDAgMSBhdXRvO1xuXHR9XG4gIH1cblxuICAuZXhhbXBsZS1zcGFjZXIge1xuXHRmbGV4OiAxIDEgYXV0bztcbiAgfVxufSIsIiRsaWdodEJsdWU6ICMwZjgzYmQ7XG4kbGlnaHRHcmV5OiAjZDNkM2QzO1xuJGJhY2tncm91bmRIaWdobGlnaHQ6ICNiM2U1ZmY7XG4kZ3JlZW5BY3RpdmU6ICMxYWZmOGM7XG4kQXBwTWVkaXVtQmx1ZTogIzIyYzdmZjtcbiIsIjpob3N0IC5hY3RpdmUtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWZmOGM7XG59XG46aG9zdCAubWVudSBidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcbiAgcGFkZGluZzogMC44NWVtIDFlbTtcbn1cbjpob3N0IC5idXR0b24udGlueSB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jdXJyZW50LXByb2plY3Qge1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuZ29vZHMge1xuICBoZWlnaHQ6IDI3cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG46aG9zdCAudG9nZ2xlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLnBpY2tlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IC5ncm91cC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3QgLnBhdGgtYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5wcm9qZWN0LW1lbnUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjpob3N0IC50b3AtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG46aG9zdCAudG9wLWJhci1yaWdodCAudG9wLWJhci1sZWZ0IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubXktYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuICA6aG9zdCAudG9wLWJhciB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleDogMCAxIGF1dG87XG4gIH1cbn1cbjpob3N0IC5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/control-bar/control-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/control-bar/control-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ControlBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBarComponent", function() { return ControlBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");
/* harmony import */ var _modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-file-browser/modal-file-browser.component */ "./src/app/components/modal-file-browser/modal-file-browser.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");














let ControlBarComponent = class ControlBarComponent {
    constructor(projectsService, geoDataService, bsModalService, groupsService, formsService, authService, router, dialog) {
        this.projectsService = projectsService;
        this.geoDataService = geoDataService;
        this.bsModalService = bsModalService;
        this.groupsService = groupsService;
        this.formsService = formsService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.featureList = [];
        this.REFRESHTIME = 60; // 60 secs per reload
        this.mapMouseLocation = new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](0, 0);
        this.liveRefresh = true;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(this.REFRESHTIME * 1000);
    }
    ngOnInit() {
        this.geoDataService.features.subscribe((fc) => {
            this.features = fc;
            if (this.features != undefined) {
                this.featureList = this.features.features;
                this.groupsService.setActiveProject(this.featureList[0]);
                // console.log(this.featureList[this.activeFeatureNum].assets[0].path);
                // this.activeFeature = this.featureList[this.activeFeatureNum];
            }
        });
        this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.groupsService.activePane.subscribe((next) => {
            this.activePane = next;
        });
        this.geoDataService.activeFeature.subscribe((next) => {
            this.activeFeature = next;
            if (this.activeFeature)
                console.log(this.activeFeature.assets[0].path);
        });
        this.authService.currentUser.subscribe(next => this.currentUser = next);
        this.projectsService.getProjects();
        this.projectsService.projects.subscribe((projects) => {
            this.projects = projects;
            if (this.projects.length) {
                this.projectsService.setActiveProject(this.projects[0]);
            }
            this.groupsService.groups.subscribe((next) => {
                this.groupList = next;
                if (this.groupList.length > 0) {
                    this.groupsExist = true;
                }
                else {
                    this.groupsExist = false;
                }
            });
            this.groupsService.activeFeatureNum.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0)).subscribe((next) => {
                this.activeFeatureNum = next;
                this.groupList.forEach(e => {
                    if (e.name == this.activeGroup) {
                        if (e.features[next].assets[0].display_path) {
                            this.imageName = /[^/]*$/.exec(e.features[next].assets[0].display_path)[0];
                        }
                        else {
                            this.imageName = /[^/]*$/.exec(e.features[next].assets[0].path)[0];
                        }
                    }
                });
            });
            this.groupsService.tempGroup.subscribe((next) => {
                this.tempGroup = next;
            });
            this.groupsService.showGroup.subscribe((next) => {
                this.showGroup = next;
            });
            this.groupsService.showSidebar.subscribe((next) => {
                this.showSidebar = next;
            });
            this.groupsService.tempGroup.subscribe((next) => {
                this.tempGroup = next;
            });
        });
        this.projectsService.activeProject.subscribe(next => {
            this.selectedProject = next;
            this.getDataForProject(this.selectedProject);
        });
        this.geoDataService.mapMouseLocation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1)).subscribe((next) => {
            this.mapMouseLocation = next;
        });
        this.timerSubscription = this.timer.subscribe(() => {
            this.reloadFeatures();
        });
        // FIXME Maybe redundant
        this.groupsService.setActiveFeatureNum(0);
    }
    reloadFeatures() {
        this.geoDataService.getFeatures(this.selectedProject.id);
    }
    setLiveRefresh(option) {
        option ? this.timerSubscription = this.timer.subscribe(() => { this.reloadFeatures(); }) : this.timerSubscription.unsubscribe();
    }
    selectProject(p) {
        this.projectsService.setActiveProject(p);
        this.getDataForProject(p);
    }
    getDataForProject(p) {
        this.geoDataService.getFeatures(p.id);
        this.geoDataService.getOverlays(p.id);
        this.geoDataService.getPointClouds(p.id);
    }
    openFilePicker() {
        const modal = this.dialog.open(_modal_file_browser_modal_file_browser_component__WEBPACK_IMPORTED_MODULE_7__["ModalFileBrowserComponent"]);
        modal.afterClosed().subscribe((files) => {
            this.geoDataService.importFileFromTapis(this.selectedProject.id, files);
        });
        // const modal: BsModalRef = this.bsModalService.show(ModalFileBrowserComponent);
        // modal.content.onClose.subscribe( (files: Array<RemoteFile>) => {
        //   this.geoDataService.importFileFromTapis(this.selectedProject.id, files);
        // });
    }
    // nameGroup(event: any) {
    //	this.groupName = event;
    //	this.groupsService.setActiveGroup(event.toLowerCase());
    // }
    // TODO This should add color
    addToGroupService(name) {
        // TODO: add group data (name) to Individual Feature property
        // for (this.featureIds) {
        //   for this.projectsService.features {
        //	if project feature id = this.fatureids {
        //	  project feature.properties[groupName] = this.groupName;
        //	}
        //   }
        // }
        this.groupName = name;
        // this.groupsService.setActiveGroup(name.toLowerCase());
        this.groupsService.setActiveGroup(name);
        // TODO Make this better
        if (!name || 0 === name.length) {
            console.log("Invalid Name");
        }
        else if (this.groupList.filter(e => e.name === name).length) {
            console.log("Existing Name");
        }
        else {
            this.groupList.push({
                name: name,
                features: this.tempGroup,
                color: this.getRandomColor(),
            });
            this.groupsService.addGroup(this.groupList);
            this.formsService.addGroup(this.groupName);
        }
        // TODO Clear input value
        // this.filterName = '';
        // Also clear selection
        this.tempGroup = [];
        this.groupsService.addTempGroup(this.tempGroup);
        this.groupsService.setUnselectAll(true);
        this.groupsService.setShowGroup(false);
    }
    openAddGroupModal(template) {
        this.dialog.open(template);
        // this.modalRef = this.bsModalService.show(template, {class: 'tiny'});
    }
    openSidebar() {
        let showSidebar = !this.showSidebar;
        let showGroup = false;
        // let showGroupButton = !this.showGroupButton;
        this.groupsService.setActiveGroup(this.groupList[0].name);
        this.groupsService.setActiveFeatureNum(0);
        this.groupsService.setShowSidebar(showSidebar);
        this.groupsService.setShowGroup(showGroup);
        this.router.navigateByUrl('/tagger', { skipLocationChange: true });
        this.tempGroup = [];
        this.groupsService.addTempGroup(this.tempGroup);
        this.groupsService.setUnselectAll(true);
        this.groupsService.setActivePane('tagger');
    }
    // TODO Make it prettier
    otherPath(dir) {
        let activeGroupObj = this.groupList.filter(realGroup => realGroup.name === this.activeGroup);
        // right
        if (dir) {
            this.activeFeatureNum += 1;
            this.activeFeatureNum = this.activeFeatureNum % activeGroupObj[0].features.length;
            // this.activeFeature = this.tempGroup[this.activeFeatureNum];
        }
        else {
            if (this.activeFeatureNum == 0) {
                this.activeFeatureNum = activeGroupObj[0].features.length;
            }
            this.activeFeatureNum -= 1;
            // this.activeFeature = this.tempGroup[this.activeFeatureNum];
        }
        // console.log(this.activeFeatureNum);
        // console.log(this.activeFeature.assets[0].path);
        this.groupsService.setActiveFeatureNum(this.activeFeatureNum);
        // console.log(this.activeGroup);
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // TODO
    goToRoute() {
        if (this.activePane == "preset") {
            this.groupsService.setActivePane("tagger");
            this.router.navigateByUrl('/tagger', { skipLocationChange: true });
        }
        else {
            this.groupsService.setActivePane("preset");
            this.router.navigateByUrl('/preset', { skipLocationChange: true });
        }
        this.groupsService.setActiveGroup(this.activeGroup);
    }
    // TODO
    clearAndUnselect() {
    }
};
ControlBarComponent.ctorParameters = () => [
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"] },
    { type: ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_9__["GroupsService"] },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_10__["FormsService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] }
];
ControlBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./control-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-bar/control-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./control-bar.component.scss */ "./src/app/components/control-bar/control-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
        _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"],
        ngx_foundation__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_9__["GroupsService"],
        _services_forms_service__WEBPACK_IMPORTED_MODULE_10__["FormsService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])
], ControlBarComponent);



/***/ }),

/***/ "./src/app/components/image-box/image-box.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/image-box/image-box.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .img-container {\n  position: relative;\n}\n:host .img-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: default;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .top-overlay {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  opacity: 0;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n  text-align: center;\n}\n:host .bottom-overlay {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  opacity: 1;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  cursor: pointer;\n  text-align: center;\n}\n:host .img-container:hover img {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay {\n  opacity: 0.9;\n}\n:host .img-container:hover .top-overlay:hover {\n  opacity: 1;\n}\n:host .image-option {\n  opacity: 0.9;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  color: black;\n  width: 40px;\n  height: 30px;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 3px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .image-option:hover {\n  opacity: 1;\n}\n:host .image-option .fas {\n  top: 5px;\n}\n:host .img-selected {\n  border: solid #4FB876;\n  border-width: 5px;\n}\n:host .img-unselected {\n  border: solid #fff;\n  border-width: 5px;\n}\n:host .group-tags {\n  opacity: 0.9;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: auto;\n  height: 30px;\n  border-radius: 5px;\n  padding: 5px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 999;\n}\n:host .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .box {\n  padding: 1px;\n}\n.zoom-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-height: 700px;\n}\n.zoom-content .img-container {\n  overflow-y: scroll;\n  width: 100%;\n  height: 100%;\n  background-color: #e7e7e7;\n}\n.zoom-content .img-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 24px;\n  background-color: #e7e7e7;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n.zoom-content .title {\n  background-color: #ccc;\n  padding: 5px;\n}\n.zoom-content .detail-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 5px;\n}\n.zoom-content .detail-contents {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px;\n  background-color: #fff;\n}\n.zoom-content .detail-item {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtYm94L2ltYWdlLWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1ib3gvaW1hZ2UtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Qsa0JBQUE7QUNBRDtBREtFO0VBQ0Qsb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hEO0FET0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNORDtBRFdFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVkQ7QURlRTtFQUNELFlBQUE7QUNiRDtBRGdCRTtFQUNELFlBQUE7QUNkRDtBRGlCRTtFQUNELFVBQUE7QUNmRDtBRGtCRTtFQUNELFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2hCRDtBRG1CRTtFQUNELFVBQUE7QUNqQkQ7QURvQkU7RUFDRCxRQUFBO0FDbEJEO0FEcUJFO0VBQ0QscUJBQUE7RUFDQSxpQkFBQTtBQ25CRDtBRHNCRTtFQUNELGtCQUFBO0VBQ0EsaUJBQUE7QUNwQkQ7QUR1QkU7RUFDRCxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ3JCRDtBRHdCRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDdEJEO0FEeUJFO0VBQ0QsWUFBQTtBQ3ZCRDtBRDRCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDekJGO0FEMkJFO0VBQ0Qsa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDMUJEO0FENkJFO0VBSUQsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQzlCRDtBRGlDRTtFQUNELHNCQUFBO0VBQ0EsWUFBQTtBQy9CRDtBRGtDRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNoQ0Q7QURtQ0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNqQ0Q7QURvQ0U7RUFDRCxZQUFBO0FDbENEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1ib3gvaW1hZ2UtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaW1nLWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ly8gd2lkdGg6IDEwMCU7XG5cdC8vIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyIGltZyB7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiAxMDAlO1xuXHRtYXJnaW46IDAgYXV0bztcbiAgfVxuXG5cbiAgLnRvcC1vdmVybGF5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XG5cdG9wYWNpdHk6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ly8gVE9ETyBtYWtlIGl0IHdvcmsgd2l0aCB3aW5kb3dzIGFuZCB0cmFuc2Zvcm07XG5cdHJpZ2h0OiAxMHB4O1xuXHR0b3A6IDEwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0Ly8gLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbiAgLmJvdHRvbS1vdmVybGF5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XG5cdG9wYWNpdHk6IDE7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ly8gVE9ETyBtYWtlIGl0IHdvcmsgd2l0aCB3aW5kb3dzIGFuZCB0cmFuc2Zvcm0gKG9yIHBvc3Rjc3MgcHJlZml4KTtcblx0cmlnaHQ6IDEwcHg7XG5cdGJvdHRvbTogMTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOztcblx0Ly8gLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOztcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyOmhvdmVyIGltZyB7XG5cdG9wYWNpdHk6IDAuOTtcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyOmhvdmVyIC50b3Atb3ZlcmxheSB7XG5cdG9wYWNpdHk6IDAuOTtcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyOmhvdmVyIC50b3Atb3ZlcmxheTpob3ZlciB7XG5cdG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaW1hZ2Utb3B0aW9uIHtcblx0b3BhY2l0eTogMC45O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0Y29sb3I6IGJsYWNrO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bWFyZ2luOiAzcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmltYWdlLW9wdGlvbjpob3ZlciB7XG5cdG9wYWNpdHk6IDE7XG4gIH1cblxuICAuaW1hZ2Utb3B0aW9uIC5mYXMge1xuXHR0b3A6IDVweDtcbiAgfVxuXG4gIC5pbWctc2VsZWN0ZWQge1xuXHRib3JkZXI6IHNvbGlkICM0RkI4NzY7XG5cdGJvcmRlci13aWR0aDogNXB4O1xuICB9XG5cbiAgLmltZy11bnNlbGVjdGVkIHtcblx0Ym9yZGVyOiBzb2xpZCAjZmZmO1xuXHRib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuXG4gIC5ncm91cC10YWdzIHtcblx0b3BhY2l0eTogMC45O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0d2lkdGg6IGF1dG87XG5cdGhlaWdodDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiA1cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR6LWluZGV4OiA5OTk7XG4gIH1cblxuICAuY2VudGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYm94IHtcblx0cGFkZGluZzogMXB4O1xuICB9XG5cbn1cblxuLnpvb20tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xuXG4gIC5pbWctY29udGFpbmVyIHtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHQvLyBvdmVyZmxvdy14OiBoaWRkZW47XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIH1cblxuICAuaW1nLWRldGFpbHMge1xuXHQvLyB3aWR0aDogMTAwJTtcblx0Ly8gaGVpZ2h0OiAxMDAlO1xuXHQvLyBtYXJnaW4tcmlnaHQ6IDI0cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbi10b3A6IDI0cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG5cdHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC5kZXRhaWwtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmRldGFpbC1jb250ZW50cyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHBhZGRpbmc6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5kZXRhaWwtaXRlbSB7XG5cdHBhZGRpbmc6IDVweDtcbiAgfVxufVxuIiwiOmhvc3QgLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAuaW1nLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgLnRvcC1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmJvdHRvbS1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmltZy1jb250YWluZXI6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC45O1xufVxuOmhvc3QgLmltZy1jb250YWluZXI6aG92ZXIgLnRvcC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMC45O1xufVxuOmhvc3QgLmltZy1jb250YWluZXI6aG92ZXIgLnRvcC1vdmVybGF5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC5pbWFnZS1vcHRpb24ge1xuICBvcGFjaXR5OiAwLjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuaW1hZ2Utb3B0aW9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC5pbWFnZS1vcHRpb24gLmZhcyB7XG4gIHRvcDogNXB4O1xufVxuOmhvc3QgLmltZy1zZWxlY3RlZCB7XG4gIGJvcmRlcjogc29saWQgIzRGQjg3NjtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuaW1nLXVuc2VsZWN0ZWQge1xuICBib3JkZXI6IHNvbGlkICNmZmY7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuOmhvc3QgLmdyb3VwLXRhZ3Mge1xuICBvcGFjaXR5OiAwLjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTtcbn1cbjpob3N0IC5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5ib3gge1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi56b29tLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbn1cbi56b29tLWNvbnRlbnQgLmltZy1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG4uem9vbS1jb250ZW50IC5pbWctZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi56b29tLWNvbnRlbnQgLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgcGFkZGluZzogNXB4O1xufVxuLnpvb20tY29udGVudCAuZGV0YWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbn1cbi56b29tLWNvbnRlbnQgLmRldGFpbC1jb250ZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi56b29tLWNvbnRlbnQgLmRldGFpbC1pdGVtIHtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/image-box/image-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/image-box/image-box.component.ts ***!
  \*************************************************************/
/*! exports provided: ImageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBoxComponent", function() { return ImageBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-foundation/modal */ "./node_modules/ngx-foundation/modal/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");








let ImageBoxComponent = class ImageBoxComponent {
    constructor(geoDataService, groupsService, modalService, dialog) {
        this.geoDataService = geoDataService;
        this.groupsService = groupsService;
        this.modalService = modalService;
        this.dialog = dialog;
        this.status = false;
        this.hasGroup = false;
        this.colors = [];
        // This is for tooltip
        this.currentGroup = "hello";
        this.unselectAll = false;
        // FIXME Bad
        this.imageCollection = {};
    }
    ngOnInit() {
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        let featureSource = this.environment.apiUrl + '/assets/' + this.feature.assets[0].path;
        featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
        this.featureSource = featureSource;
        this.coordinates = this.feature.geometry['coordinates'];
        // console.log(coordinates[0]);
        this.groupsService.groups.subscribe((next) => {
            this.groupList = next;
            if (this.groupList != null && this.groupList.length > 0 && this.featureSource != null) {
                let theGroups = this.groupList.forEach(e => {
                    e.features.forEach(c => {
                        if (c.id == this.feature.id) {
                            if (!this.colors.includes(e.color)) {
                                this.colors.push(e.color);
                            }
                            this.hasGroup = true;
                        }
                    });
                });
            }
        });
        this.groupsService.tempGroup.subscribe((next) => {
            this.tempGroup = next;
        });
        this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.groupsService.unselectAll.subscribe((next) => {
            this.unselectAll = next;
            if (this.unselectAll == true) {
                this.status = false;
            }
        });
    }
    // click() {
    //   this.clickRequest.emit(this.feature);
    // // imageSelect(event: any) {
    // //   if (event.target.classList.contains('img-selected')) {
    // //     this.renderer.removeClass(event.target, "img-selected");
    // //     this.renderer.addClass(event.target, "img-unselected");
    // //   } else {
    // //     this.renderer.removeClass(event.target, "img-unselected");
    // //     this.renderer.addClass(event.target, "img-selected");
    // //   }
    // // }
    // }
    // delete() {
    //   this.geoDataService.deleteFeature(this.feature);
    // }
    imageSelect() {
        if (this.unselectAll == true) {
            this.unselectAll = false;
            this.groupsService.setUnselectAll(false);
        }
        this.status = !this.status;
        if (this.tempGroup.filter(v => v.assets[0].id == this.feature.assets[0].id).length > 0) {
            this.tempGroup = this.tempGroup.filter(v => v.assets[0].id != this.feature.assets[0].id);
        }
        else {
            this.tempGroup.push(this.feature);
        }
        this.groupsService.addTempGroup(this.tempGroup);
        // console.log(this.tempGroup.filter(v => v.assets[0].id == feature.assets[0].id).length > 0)
        // Hide group-bar
        if (this.tempGroup.length == 0) {
            this.groupsService.setShowGroup(false);
        }
        else {
            this.groupsService.setShowGroup(true);
        }
    }
    imageZoom(template) {
        // this.modalRef = this.modalService.show(template, {class: 'full'});
        this.dialog.open(template);
    }
    imageDelete() {
        this.geoDataService.deleteFeature(this.feature);
    }
    openMoreGroupsModal(template) {
        // this.modalRef = this.modalService.show(template, {class: 'tiny'});
        this.dialog.open(template);
    }
    openImageDeleteModal(template) {
        // this.modalRef = this.modalService.show(template, {class: 'tiny'});
        this.dialog.open(template);
    }
    // TODO Delete group if sole feature
    deleteFromGroup(color) {
        this.groupList.forEach(e => {
            // When it is the sole feature
            if (e.features.length <= 1) {
                this.groupList = this.groupList.filter(e => e.color != color);
            }
            else {
                if (e.color == color) {
                    e.features = e.features.filter(i => i.id != this.feature.id);
                }
            }
        });
        this.groupsService.addGroup(this.groupList);
        this.colors = this.colors.filter(e => e != color);
    }
    openImageAddModal(template) {
        // this.modalRef = this.modalService.show(template, {class: 'tiny'});
        this.dialog.open(template);
    }
    selectGroupForm(name) {
        this.groupsService.setActiveFeatureNum(0);
        this.groupList.forEach(e => {
            if (e.name == name) {
                e.features.push(this.feature);
            }
        });
        this.groupsService.addGroup(this.groupList);
    }
    getGroupNameFromColor(color) {
        this.groupList.forEach(e => {
            if (e.color == color) {
                this.currentGroup = e.name;
            }
        });
    }
};
ImageBoxComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] },
    { type: ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_models__WEBPACK_IMPORTED_MODULE_2__["Feature"])
], ImageBoxComponent.prototype, "feature", void 0);
ImageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-box/image-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-box.component.scss */ "./src/app/components/image-box/image-box.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_3__["GeoDataService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"],
        ngx_foundation_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], ImageBoxComponent);



/***/ }),

/***/ "./src/app/components/image-gallery/image-gallery.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-gallery/image-gallery.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .img-list-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1em;\n  height: 100%;\n  padding: 1em;\n}\n:host app-image-box {\n  height: 100%;\n}\n:host .masonry-item {\n  width: 200px;\n}\n:host ngx-spinner {\n  position: relative;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100px;\n  background: #fff;\n}\n:host .side-bar-container {\n  background-color: #F1F1F1;\n  position: fixed;\n  width: 18%;\n  margin-right: 0px;\n  height: calc(100vh - 50px);\n  right: 0;\n}\n:host .success {\n  margin-right: 20%;\n}\n:host .danger {\n  margin-right: 0%;\n}\n:host #gallery-container {\n  position: relative;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 50px;\n}\n:host #gallery-container .gallery-image {\n  height: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host #gallery-container .gallery-image img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n:host .imager {\n  width: 60%;\n  height: calc(100vh - 50px);\n  background-color: #fefefe;\n}\n:host .view-image {\n  max-width: 80%;\n  height: auto;\n}\n:host .gallery-btn {\n  width: 35px;\n  height: 35px;\n  background: #000;\n  color: #fff;\n  text-align: center;\n  line-height: 35px;\n  cursor: pointer;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  font-size: 20px;\n  box-sizing: border-box;\n  padding-left: 2px;\n  position: fixed;\n  bottom: 10px;\n}\n:host .gallery-btn:hover {\n  background: #222;\n}\n:host .gallery-close {\n  top: 10px;\n}\n:host .gallery-close .gallery-next {\n  right: 10px;\n}\n:host .gallery-prev {\n  right: 50px;\n}\n:host .gallery-prev .gallery-next {\n  bottom: 10px;\n}\n@media (min-width: 478px) {\n  :host .img-list-container img:nth-child(3n):not(last-of-type) {\n    grid-row-end: span 2;\n  }\n}\n@media (max-width: 768px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n}\n@media (max-width: 450px) {\n  :host .img-list-container {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FIO0FER0M7RUFDRSxZQUFBO0FDREg7QURJQztFQUNFLFlBQUE7QUNGSDtBREtDO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNISDtBRE1DO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFHQSxRQUFBO0FDTkg7QURTQztFQUNFLGlCQUFBO0FDUEg7QURVQztFQUNFLGdCQUFBO0FDUkg7QURXQztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDWEg7QURjQztFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNaSDtBRGVDO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2JIO0FEZ0JDO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNkSDtBRG1CQztFQUNFLGNBQUE7RUFDQSxZQUFBO0FDakJIO0FEb0JDO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUdBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDbEJIO0FEcUJDO0VBQ0UsZ0JBQUE7QUNuQkg7QURzQkM7RUFDRSxTQUFBO0FDcEJIO0FEdUJDO0VBRUUsV0FBQTtBQ3RCSDtBRHlCQztFQUNFLFdBQUE7QUN2Qkg7QUQwQkM7RUFFRSxZQUFBO0FDekJIO0FENEJDO0VBQ0U7SUFDRCxvQkFBQTtFQzFCQTtBQUNGO0FENkJDO0VBQ0U7SUFDRCwyREFBQTtFQzNCQTtBQUNGO0FEOEJDO0VBQ0U7SUFDRCwyREFBQTtFQzVCQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdC5pbWctbGlzdC1jb250YWluZXIge1xuXHQgIGRpc3BsYXk6IGdyaWQ7XG5cdCAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHQgIGdyaWQtZ2FwOiAxZW07XG5cdCAgaGVpZ2h0OiAxMDAlO1xuXHQgIHBhZGRpbmc6IDFlbTtcblx0fVxuICBcblx0YXBwLWltYWdlLWJveCB7XG5cdCAgaGVpZ2h0OiAxMDAlO1xuXHR9XG4gIFxuXHQubWFzb25yeS1pdGVtIHtcblx0ICB3aWR0aDogMjAwcHg7XG5cdH1cbiAgXG5cdG5neC1zcGlubmVyIHtcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgYm90dG9tOiAwcHg7XG5cdCAgbGVmdDogMHB4O1xuXHQgIHdpZHRoOiAxMDAlO1xuXHQgIGhlaWdodDogMTAwcHg7XG5cdCAgYmFja2dyb3VuZDogI2ZmZjtcblx0fVxuXHQvLyBNYWtlIG92ZXJmbG93IGZvciB0aGlzIGhpZGRlblxuXHQuc2lkZS1iYXItY29udGFpbmVyIHtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuXHQgIHBvc2l0aW9uOiBmaXhlZDtcblx0ICB3aWR0aDogMTglO1xuXHQgIG1hcmdpbi1yaWdodDogMHB4O1xuXHQgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuXHQgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdCAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcblx0ICByaWdodDogMDtcblx0fVxuICBcblx0LnN1Y2Nlc3Mge1xuXHQgIG1hcmdpbi1yaWdodDogMjAlO1xuXHR9XG4gIFxuXHQuZGFuZ2VyIHtcblx0ICBtYXJnaW4tcmlnaHQ6IDAlO1xuXHR9XG4gIFxuXHQjZ2FsbGVyeS1jb250YWluZXIge1xuXHQgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICB3aWR0aDogMTAwJTtcblx0ICBoZWlnaHQ6IGF1dG87XG5cdCAgLy8gYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjkpO1xuXHQgIC8vIHotaW5kZXg6IC0xO1xuXHQgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0ICBkaXNwbGF5OiBmbGV4O1xuXHQgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCAgbWFyZ2luLXRvcDogNTBweDtcblx0fVxuICBcblx0I2dhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlIHtcblx0ICBoZWlnaHQ6IDEwMCU7XG5cdCAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuICBcblx0I2dhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlIGltZyB7XG5cdCAgbWF4LXdpZHRoOiAxMDAlO1xuXHQgIG1heC1oZWlnaHQ6IDEwMCU7XG5cdCAgbWFyZ2luOiAwIGF1dG87XG5cdH1cbiAgXG5cdC5pbWFnZXIge1xuXHQgIHdpZHRoOiA2MCU7XG5cdCAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcblx0fVxuXG5cdFxuICBcblx0LnZpZXctaW1hZ2Uge1xuXHQgIG1heC13aWR0aDogODAlO1xuXHQgIGhlaWdodDogYXV0bztcblx0fVxuICBcblx0LmdhbGxlcnktYnRuIHtcblx0ICB3aWR0aDogMzVweDtcblx0ICBoZWlnaHQ6IDM1cHg7XG5cdCAgYmFja2dyb3VuZDogIzAwMDtcblx0ICBjb2xvcjogI2ZmZjtcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgbGluZS1oZWlnaHQ6IDM1cHg7XG5cdCAgY3Vyc29yOiBwb2ludGVyO1xuXHQgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcblx0ICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHQgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcblx0ICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHQgIGZvbnQtc2l6ZTogMjBweDtcblx0ICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQgIHBhZGRpbmctbGVmdDogMnB4O1xuXHQgIHBvc2l0aW9uOiBmaXhlZDtcblx0ICBib3R0b206IDEwcHg7XG5cdH1cbiAgXG5cdC5nYWxsZXJ5LWJ0bjpob3ZlciB7XG5cdCAgYmFja2dyb3VuZDogIzIyMjtcblx0fVxuICBcblx0LmdhbGxlcnktY2xvc2Uge1xuXHQgIHRvcDogMTBweDtcblx0fVxuICBcblx0LmdhbGxlcnktY2xvc2Vcblx0LmdhbGxlcnktbmV4dCB7XG5cdCAgcmlnaHQ6IDEwcHg7XG5cdH1cbiAgXG5cdC5nYWxsZXJ5LXByZXYge1xuXHQgIHJpZ2h0OiA1MHB4O1xuXHR9XG4gIFxuXHQuZ2FsbGVyeS1wcmV2XG5cdC5nYWxsZXJ5LW5leHQge1xuXHQgIGJvdHRvbTogMTBweDtcblx0fVxuICBcblx0QG1lZGlhIChtaW4td2lkdGg6IDQ3OHB4KSB7XG5cdCAgLmltZy1saXN0LWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDNuKTpub3QobGFzdC1vZi10eXBlKSB7XG5cdFx0Z3JpZC1yb3ctZW5kOiBzcGFuIDI7XG5cdCAgfVxuXHR9XG4gIFxuXHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0ICAuaW1nLWxpc3QtY29udGFpbmVyIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcblx0ICB9XG5cdH1cbiAgXG5cdEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuXHQgIC5pbWctbGlzdC1jb250YWluZXIge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuXHQgIH1cblx0fVxuICB9IiwiOmhvc3QgLmltZy1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG59XG46aG9zdCBhcHAtaW1hZ2UtYm94IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLm1hc29ucnktaXRlbSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbjpob3N0IG5neC1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjpob3N0IC5zaWRlLWJhci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxOCU7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdCAuc3VjY2VzcyB7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufVxuOmhvc3QgLmRhbmdlciB7XG4gIG1hcmdpbi1yaWdodDogMCU7XG59XG46aG9zdCAjZ2FsbGVyeS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbjpob3N0ICNnYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgI2dhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuaW1hZ2VyIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG59XG46aG9zdCAudmlldy1pbWFnZSB7XG4gIG1heC13aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCAuZ2FsbGVyeS1idG4ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG59XG46aG9zdCAuZ2FsbGVyeS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuOmhvc3QgLmdhbGxlcnktY2xvc2Uge1xuICB0b3A6IDEwcHg7XG59XG46aG9zdCAuZ2FsbGVyeS1jbG9zZSAuZ2FsbGVyeS1uZXh0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG46aG9zdCAuZ2FsbGVyeS1wcmV2IHtcbiAgcmlnaHQ6IDUwcHg7XG59XG46aG9zdCAuZ2FsbGVyeS1wcmV2IC5nYWxsZXJ5LW5leHQge1xuICBib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDc4cHgpIHtcbiAgOmhvc3QgLmltZy1saXN0LWNvbnRhaW5lciBpbWc6bnRoLWNoaWxkKDNuKTpub3QobGFzdC1vZi10eXBlKSB7XG4gICAgZ3JpZC1yb3ctZW5kOiBzcGFuIDI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuaW1nLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIDpob3N0IC5pbWctbGlzdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/image-gallery/image-gallery.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-gallery/image-gallery.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function() { return ImageGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let ImageGalleryComponent = class ImageGalleryComponent {
    constructor(geoDataService, projectsService, groupsService, renderer, spinner) {
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.groupsService = groupsService;
        this.renderer = renderer;
        this.spinner = spinner;
        this.scrolling = false;
        this.featureList = [];
        this.scrollSum = 15;
    }
    ngOnInit() {
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        // this.activeFeatureNum = 0;
        // FIXME feature collection giving me an error when trying to access assets
        // this.geoDataService.features.subscribe( (fc: FeatureCollection) => {
        this.geoDataService.features.subscribe((fc) => {
            if (fc) {
                this.featureList = fc.features.filter(feature => {
                    return feature.assets[0].asset_type == "image";
                });
                if (this.scrollSum == 15) {
                    this.featureListScroll = this.featureList.slice(0, this.scrollSum);
                }
            }
        });
        this.geoDataService.activeFeature.subscribe((next) => {
            if (next) {
                this.activeFeature = next;
            }
        });
        this.groupsService.groups.subscribe((next) => {
            this.groupList = next;
        });
        this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.groupsService.tempGroup.subscribe((next) => {
            this.tempGroup = next;
        });
        this.groupsService.showGroup.subscribe((next) => {
            this.showGroup = next;
        });
        this.groupsService.activeFeatureNum.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0)).subscribe((next) => {
            this.activeFeatureNum = next;
        });
        this.groupsService.showSidebar.subscribe((next) => {
            this.showSidebar = next;
            // this.status = !this.status;
            if (next) {
                this.status = true;
            }
            else {
                this.status = false;
            }
        });
        this.groupsService.setActiveFeatureNum(0);
    }
    getPath() {
        // let featureSource = this.environment.apiUrl + '/assets/' + this.activeFeature.assets[0].path;
        let activeGroupObj = this.groupList.filter(realGroup => realGroup.name === this.activeGroup);
        if (activeGroupObj[0] != undefined) {
            if (activeGroupObj[0].features[this.activeFeatureNum].assets[0].path == undefined) {
                this.groupsService.setActiveFeatureNum(0);
                // this.groupsService.setActiveFeatureNum(0);
                if (activeGroupObj[0].features[this.activeFeatureNum] == undefined) {
                    this.groupsService.setActiveGroup(this.groupList[0].name);
                }
            }
        }
        let featureSource = this.environment.apiUrl + '/assets/' + activeGroupObj[0].features[this.activeFeatureNum].assets[0].path;
        this.groupsService.setActiveFeatureId(activeGroupObj[0].features[this.activeFeatureNum].id);
        featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
        return featureSource;
    }
    appendSum() {
        if (this.featureList.length != 0) {
            if (this.scrollSum > this.featureList.length) {
                this.scrollSum = this.featureList.length;
            }
            if (this.scrollSum == this.featureList.length) {
                this.spinner.hide();
                this.scrolling = false;
                return;
            }
        }
        this.featureListScroll = this.featureList.slice(0, this.scrollSum);
        setTimeout(() => {
            this.spinner.hide();
            this.scrolling = false;
        }, 1300);
    }
    onScroll() {
        if (!this.scrolling) {
            this.spinner.show();
            this.scrollSum += 10;
            this.appendSum();
            this.scrolling = true;
        }
        // if (this.notscrolly && this.notEmptyPost) {
        //   this.spinner.show();
        //   this.notscrolly = false;
        //   this.loadNextPost();
        // }
        // console.log('scrolled!!');
    }
};
ImageGalleryComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
ImageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-gallery/image-gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-gallery.component.scss */ "./src/app/components/image-gallery/image-gallery.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], ImageGalleryComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .top-bar {\n  height: 40px;\n  padding: 5px;\n  padding-left: 0.5em;\n  flex-wrap: nowrap;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  z-index: 999;\n}\n:host .top-bar-right .top-bar-left {\n  -webkit-box-flex: 0;\n  flex-wrap: nowrap;\n  flex: 0 1 auto;\n  max-width: 100%;\n}\n@media print, screen and (min-width: 40em) {\n  :host .top-bar {\n    flex-wrap: nowrap;\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNELFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUQ7QURHRTtFQUVELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZEO0FETUU7RUFDRDtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7WUFBQSxjQUFBO0VDSkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudG9wLWJhciB7XG5cdGhlaWdodDogNDBweDtcblx0cGFkZGluZzogNXB4O1xuXHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcblx0ei1pbmRleDogOTk5O1xuICB9XG5cbiAgLnRvcC1iYXItcmlnaHRcbiAgLnRvcC1iYXItbGVmdCB7XG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRmbGV4OiAwIDEgYXV0bztcblx0bWF4LXdpZHRoOiAxMDAlO1xuXG4gIH1cblxuICBAbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuXHQudG9wLWJhciB7XG5cdCAgZmxleC13cmFwOiBub3dyYXA7XG5cdCAgZmxleDogMCAxIGF1dG87XG5cdH1cbiAgfVxufVxuIiwiOmhvc3QgLnRvcC1iYXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbjpob3N0IC50b3AtYmFyLXJpZ2h0IC50b3AtYmFyLWxlZnQge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleDogMCAxIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XG4gIDpob3N0IC50b3AtYmFyIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-foundation */ "./node_modules/ngx-foundation/index.js");





let MainComponent = class MainComponent {
    // public activeFeature: Feature;
    // public currentUser: AuthenticatedUser;
    constructor(geoDataService, authService, bsModalService) {
        this.geoDataService = geoDataService;
        this.authService = authService;
        this.bsModalService = bsModalService;
    }
    ngOnInit() {
        // this.geoDataService.activeFeature.subscribe( next => {
        //   this.activeFeature = next;
        // });
        // this.authService.currentUser.subscribe(next => this.currentUser = next);
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_foundation__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
], MainComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/leafletUtils */ "./src/app/utils/leafletUtils.ts");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @turf/turf */ "./node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");











let MapComponent = class MapComponent {
    constructor(GeoDataService, route) {
        this.GeoDataService = GeoDataService;
        this.route = route;
        this.mapType = 'normal';
        this.features = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
        // Have to bind these to keep this being this
        this.featureClickHandler.bind(this);
        this.mouseEventHandler.bind(this);
    }
    ngOnInit() {
        // const mapType: string = this.route.snapshot.queryParamMap.get('mapType');
        // this.projectId = +this.route.snapshot.paramMap.get("projectId");
        // this.cluster = this.route.snapshot.queryParamMap.get('mapType');
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"];
        this.overlays = new Map();
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Map"]('map', {
            center: [40, -80],
            zoom: 9
        });
        const baseOSM = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        const satellite = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });
        // default to streetmap view;
        this.map.addLayer(baseOSM);
        this.loadFeatures();
        // Publish the mouse location on the mapMouseLocation stream
        this.map.on('mousemove', (ev) => this.mouseEventHandler(ev));
        this.GeoDataService.activeOverlay.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe((next) => {
            this.addRemoveOverlay(next);
        });
        // Listen on the activeFeature stream and zoom map to that feature when it changes
        this.GeoDataService.activeFeature.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(n => n != null)).subscribe((next) => {
            this.activeFeature = next;
            const bbox = _turf_turf__WEBPACK_IMPORTED_MODULE_7__["bbox"](next);
            this.map.fitBounds([[bbox[1], bbox[0]], [bbox[3], bbox[2]]]);
        });
        // Listen for changes to the basemap
        this.GeoDataService.basemap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe((next) => {
            if (next == 'sat') {
                this.map.removeLayer(baseOSM);
                this.map.addLayer(satellite);
            }
            if (next == 'roads') {
                this.map.removeLayer(satellite);
                this.map.addLayer(baseOSM);
            }
        });
    }
    addRemoveOverlay(ov) {
        if (this.overlays.has(ov.id)) {
            this.features.removeLayer(this.overlays.get(ov.id));
            this.overlays.delete(ov.id);
        }
        else {
            const overlay = leaflet__WEBPACK_IMPORTED_MODULE_3__["imageOverlay"](_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl + '/assets/' + ov.path, [[ov.minLat, ov.minLon], [ov.maxLat, ov.maxLon]]);
            this.overlays.set(ov.id, overlay);
            this.features.addLayer(overlay);
        }
        this.map.fitBounds(this.features.getBounds());
    }
    mouseEventHandler(ev) {
        this.GeoDataService.mapMouseLocation = ev.latlng;
    }
    /**
     * Load Features for a project.
     */
    loadFeatures() {
        const geojsonOptions = {
            pointToLayer: _utils_leafletUtils__WEBPACK_IMPORTED_MODULE_6__["createMarker"]
        };
        this.GeoDataService.features.subscribe(collection => {
            this.features.clearLayers();
            const markers = leaflet__WEBPACK_IMPORTED_MODULE_3__["markerClusterGroup"]({
                iconCreateFunction: (cluster) => {
                    return leaflet__WEBPACK_IMPORTED_MODULE_3__["divIcon"]({ html: `<div><b>${cluster.getChildCount()}</b></div>`, className: 'marker-cluster' });
                }
            });
            collection.features.forEach(d => {
                const feat = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](d, geojsonOptions);
                feat.on('click', (ev) => { this.featureClickHandler(ev); });
                if (d.geometry.type == 'Point') {
                    markers.addLayer(feat);
                }
                else {
                    this.features.addLayer(feat);
                }
            });
            this.features.addLayer(markers);
            this.map.addLayer(this.features);
            try {
                this.map.fitBounds(this.features.getBounds());
            }
            catch (e) { }
        });
    }
    /**
     *
     * @param ev
     */
    featureClickHandler(ev) {
        const f = ev.layer.feature;
        this.GeoDataService.activeFeature = f;
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_5__["GeoDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MapComponent);



/***/ }),

/***/ "./src/app/components/modal-file-browser/modal-file-browser.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/modal-file-browser/modal-file-browser.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 20em;\n}\n:host .fileslisting {\n  min-height: 15em;\n  max-height: 15em;\n  overflow-y: scroll;\n}\n:host .file-row {\n  border: 1px solid transparent;\n}\n:host .file-row:hover {\n  border: 1px solid #d3d3d3;\n}\n:host .file-row:hover.selected {\n  background: #d3d3d3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZmlsZS1icm93c2VyL21vZGFsLWZpbGUtYnJvd3Nlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1maWxlLWJyb3dzZXIvbW9kYWwtZmlsZS1icm93c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7QUNGRjtBREdFO0VBQ0QsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREQ7QURJRTtFQUNELDZCQUFBO0FDRkQ7QURHQztFQUNFLHlCQUFBO0FDREg7QURFRztFQUNELG1CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWZpbGUtYnJvd3Nlci9tb2RhbC1maWxlLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi8vIFRPRE86IEZpeCBhbm5veWluZyBtYXJnaW4gZmxhc2hcbjpob3N0IHtcbiAgbWluLWhlaWdodDogMjBlbTtcbiAgLmZpbGVzbGlzdGluZyB7XG5cdG1pbi1oZWlnaHQ6IDE1ZW07XG5cdG1heC1oZWlnaHQ6IDE1ZW07XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gIC5maWxlLXJvdyB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHQmOmhvdmVyIHtcblx0ICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRHcmV5O1xuXHQgICYuc2VsZWN0ZWQge1xuXHRcdGJhY2tncm91bmQ6ICNkM2QzZDM7XG5cdCAgfVxuXHR9XG4gIH1cblxufVxuIiwiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAyMGVtO1xufVxuOmhvc3QgLmZpbGVzbGlzdGluZyB7XG4gIG1pbi1oZWlnaHQ6IDE1ZW07XG4gIG1heC1oZWlnaHQ6IDE1ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbjpob3N0IC5maWxlLXJvdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmZpbGUtcm93OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcbn1cbjpob3N0IC5maWxlLXJvdzpob3Zlci5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/modal-file-browser/modal-file-browser.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/modal-file-browser/modal-file-browser.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalFileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFileBrowserComponent", function() { return ModalFileBrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agave-systems.service */ "./src/app/services/agave-systems.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tapis-files.service */ "./src/app/services/tapis-files.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let ModalFileBrowserComponent = class ModalFileBrowserComponent {
    constructor(tapisFilesService, 
    // private modalRef: BsModalRef,
    dialogRef, dialog, authService, agaveSystemsService) {
        this.tapisFilesService = tapisFilesService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.authService = authService;
        this.agaveSystemsService = agaveSystemsService;
        this.selectedFiles = new Map();
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.agaveSystemsService.list();
        // TODO: change those hard coded systemIds to environment vars or some sort of config
        // wait on the currentUser and systems to resolve
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.authService.currentUser, this.agaveSystemsService.systems, this.agaveSystemsService.projects])
            .subscribe(([user, systems, projects]) => {
            this.myDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.default');
            this.communityDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.community');
            this.publishedDataSystem = systems.find((sys) => sys.id === 'designsafe.storage.published');
            this.selectedSystem = this.myDataSystem;
            this.projects = projects;
            this.currentUser = user;
            const init = {
                system: this.myDataSystem.id,
                type: 'dir',
                path: this.currentUser.username
            };
            this.browse(init);
        });
    }
    selectSystem(system) {
        let pth;
        system.id === this.myDataSystem.id ? pth = this.currentUser.username : pth = '/';
        const init = {
            system: system.id,
            type: 'dir',
            path: pth
        };
        this.browse(init);
    }
    browse(file) {
        if (file.type !== 'dir') {
            return;
        }
        this.inProgress = true;
        this.selectedFiles.clear();
        this.tapisFilesService.listFiles(file.system, file.path);
        this.tapisFilesService.listing.subscribe(listing => {
            this.inProgress = false;
            this.filesList = listing;
        });
    }
    // TODO: Ian: Error message on incorrect file type?
    select(file) {
        if (this.tapisFilesService.checkIfSelectable(file)) {
            this.addSelectedFile(file);
        }
        // here?
        // else {
        //   Signal Error!
        // }
    }
    addSelectedFile(file) {
        if (this.selectedFiles.has(file.path)) {
            this.selectedFiles.delete(file.path);
        }
        else {
            this.selectedFiles.set(file.path, file);
        }
    }
    chooseFiles() {
        const tmp = Array.from(this.selectedFiles.values());
        // this.onClose.next(tmp);
        // this.modalRef.hide();
        this.dialogRef.close(tmp);
    }
    cancel() {
        // this.modalRef.hide();
        this.dialogRef.close();
    }
};
ModalFileBrowserComponent.ctorParameters = () => [
    { type: _services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"] }
];
ModalFileBrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-file-browser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-file-browser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-file-browser/modal-file-browser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-file-browser.component.scss */ "./src/app/components/modal-file-browser/modal-file-browser.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tapis_files_service__WEBPACK_IMPORTED_MODULE_4__["TapisFilesService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_agave_systems_service__WEBPACK_IMPORTED_MODULE_2__["AgaveSystemsService"]])
], ModalFileBrowserComponent);



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.scss */ "./src/app/components/notfound/notfound.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/side-bar/select-group/select-group.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/select-group/select-group.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  overflow-y: scroll;\n}\n:host .select-group {\n  max-height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .group-subitem {\n  height: 100px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWdyb3VwL3NlbGVjdC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtZ3JvdXAvc2VsZWN0LWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBREFFO0VBQ0QsZUFBQTtBQ0VEO0FERUU7RUFDRCxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FEO0FER0U7RUFDRCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0REO0FESUU7RUFDRCxhQUFBO0FDRkQ7QURLRTtFQUNELGlCQUFBO0FDSEQ7QURNRTtFQUNELGFBQUE7QUNKRDtBRE9FO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTEQ7QURRRTtFQUNELHlCQUFBO0FDTkQ7QURTRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDUEQ7QURVRTtFQUNELHFCQUFBO0VBQ0EsWUFBQTtBQ1JEO0FEV0U7RUFDRCxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDVEQ7QURZRTtFQUNELFlBQUE7QUNWRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWdyb3VwL3NlbGVjdC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAuc2VsZWN0LWdyb3VwIHtcblx0bWF4LWhlaWdodDogMjAlO1xuXHQvLyBoZWlnaHQ6IDIwJTtcbiAgfVxuXG4gIC5zdWJpdGVtLXRpdGxlIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Y29sb3I6ICM1NTU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnN1Yml0ZW0ge1xuXHRib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuXHRib3JkZXItY29sb3I6ICNGMUYxRjE7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0aGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmdyb3VwLXN1Yml0ZW0ge1xuXHRoZWlnaHQ6IDEwMHB4XG4gIH1cblxuICAuc3ViaXRlbS1zY3JvbGwge1xuXHRib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuXG4gIC5ib3hlZCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJveGVkIGxhYmVsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cblxuICAuYm94ZWQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XG4gIH1cblxuICAuZ3JvdXAtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0bWFyZ2luOiAwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAubmFtZS1ncm91cCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogM3B4O1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCB7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idXR0b24tZ3JvdXAgZGl2IHtcblx0cGFkZGluZzogM3B4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbjpob3N0IC5zZWxlY3QtZ3JvdXAge1xuICBtYXgtaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuc3ViaXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5zdWJpdGVtIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjRjFGMUYxO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5ncm91cC1zdWJpdGVtIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbjpob3N0IC5zdWJpdGVtLXNjcm9sbCB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuOmhvc3QgLmJveGVkIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5ib3hlZCBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuOmhvc3QgLmJveGVkIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XG59XG46aG9zdCAuZ3JvdXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAubmFtZS1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAgZGl2IHtcbiAgcGFkZGluZzogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/select-group/select-group.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/side-bar/select-group/select-group.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGroupComponent", function() { return SelectGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let SelectGroupComponent = class SelectGroupComponent {
    constructor(formsService, groupsService, dialog) {
        this.formsService = formsService;
        this.groupsService = groupsService;
        this.dialog = dialog;
        this.showSubitem = true;
    }
    ngOnInit() {
        this.groups$ = this.groupsService.groups.subscribe((next) => {
            this.groupList = next;
        });
        this.activeGroup$ = this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
    }
    selectGroupForm(group) {
        this.groupsService.setActiveGroup(group);
        this.groupsService.setActiveFeatureNum(0);
        this.formsService.changeGroupForm(group);
    }
    openRenameOptionModal(template) {
        this.dialog.open(template);
    }
    deleteGroup() {
        this.groupsService.addGroup(this.groupList.filter(what => what.name != this.activeGroup));
        if (this.groupList.length <= 0) {
            this.showSidebar = false;
            this.groupsService.setShowSidebar(this.showSidebar);
        }
        else {
            this.groupsService.setActiveGroup(this.groupList[0].name);
        }
    }
    openRenameModal(template, name) {
        this.selectedGroup = name;
        this.dialog.open(template);
    }
    isChecked(name) {
        if (this.activeGroup == name) {
            return "checked";
        }
        else {
            return "";
        }
    }
    renameGroup(name) {
        this.groupList.forEach(e => {
            if (e.name == this.selectedGroup) {
                e.name = name;
            }
        });
        this.groupsService.addGroup(this.groupList);
        this.groupsService.setActiveGroup(name);
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
        if (this.showSubitem) {
        }
        else {
        }
    }
    ngOnDestroy() {
        this.groups$.unsubscribe();
        this.activeGroup$.unsubscribe();
    }
};
SelectGroupComponent.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
SelectGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-group/select-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-group.component.scss */ "./src/app/components/side-bar/select-group/select-group.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], SelectGroupComponent);



/***/ }),

/***/ "./src/app/components/side-bar/select-image/select-image.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/select-image/select-image.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .asset-list {\n  max-height: 20%;\n}\n:host .asset-subitem {\n  height: 100px;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .button-group div {\n  padding: 3px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2VsZWN0LWltYWdlL3NlbGVjdC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtaW1hZ2Uvc2VsZWN0LWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0QsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBRDtBREdFO0VBQ0Qsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNERDtBRElFO0VBQ0QsaUJBQUE7QUNGRDtBREtFO0VBQ0QsZUFBQTtBQ0hEO0FET0U7RUFDRCxhQUFBO0FDTEQ7QURRRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0FDTkQ7QURTRTtFQUNELHlCQUFBO0FDUEQ7QURVRTtFQUNELHFCQUFBO0VBQ0EsWUFBQTtBQ1JEO0FEV0U7RUFDRCxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDVEQ7QURZRTtFQUNELFlBQUE7RUFDQSxrQkFBQTtBQ1ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zZWxlY3QtaW1hZ2Uvc2VsZWN0LWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc3ViaXRlbS10aXRsZSB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zdWJpdGVtIHtcblx0Ym9yZGVyLXdpZHRoOiAwcHggMTBweDtcblx0Ym9yZGVyLWNvbG9yOiAjRjFGMUYxO1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zdWJpdGVtLXNjcm9sbCB7XG5cdGJvcmRlci13aWR0aDogNXB4O1xuICB9XG5cbiAgLmFzc2V0LWxpc3Qge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdC8vIGhlaWdodDogMjAlO1xuICB9XG5cbiAgLmFzc2V0LXN1Yml0ZW0ge1xuXHRoZWlnaHQ6IDEwMHB4XG4gIH1cblxuICAuYXNzZXQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGlnaGxpZ2h0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbiAgfVxuXG4gIC5uYW1lLWdyb3VwIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcblx0bWFyZ2luOiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCBkaXYge1xuXHRwYWRkaW5nOiAzcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxufVxuIiwiOmhvc3QgLnN1Yml0ZW0tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuc3ViaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogI0YxRjFGMTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuc3ViaXRlbS1zY3JvbGwge1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5hc3NldC1saXN0IHtcbiAgbWF4LWhlaWdodDogMjAlO1xufVxuOmhvc3QgLmFzc2V0LXN1Yml0ZW0ge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuOmhvc3QgLmFzc2V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XG59XG46aG9zdCAubmFtZS1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5idXR0b24tZ3JvdXAgZGl2IHtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/side-bar/select-image/select-image.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/side-bar/select-image/select-image.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectImageComponent", function() { return SelectImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");




let SelectImageComponent = class SelectImageComponent {
    constructor(formsService, groupsService) {
        this.formsService = formsService;
        this.groupsService = groupsService;
        this.groupList = [];
        this.showSubitem = true;
    }
    ngOnInit() {
        this.groups$ = this.groupsService.groups.subscribe((next) => {
            this.groupList = next;
        });
        this.activeFeatureNum$ = this.groupsService.activeFeatureNum.subscribe((next) => {
            this.activeFeatureNum = next;
        });
        this.activeGroup$ = this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
    }
    getActiveFeatures() {
        let activeGroupObj = this.groupList.filter(realGroup => realGroup.name === this.activeGroup);
        return activeGroupObj[0].features;
    }
    jumpToImage(asset) {
        let index = 0;
        this.groupList.forEach(e => {
            if (e.name == this.activeGroup) {
                index = e.features.indexOf(asset);
            }
        });
        this.groupsService.setActiveFeatureNum(index);
    }
    isActiveFeature(asset) {
        let index = 0;
        this.groupList.forEach(e => {
            if (e.name == this.activeGroup) {
                index = e.features.indexOf(asset);
            }
        });
        return this.activeFeatureNum == index;
    }
    deleteGroup() {
        this.groupsService.addGroup(this.groupList.filter(what => what.name != this.activeGroup));
        if (this.groupList.length <= 0) {
            this.showSidebar = false;
            this.groupsService.setShowSidebar(this.showSidebar);
        }
        else {
            this.groupsService.setActiveGroup(this.groupList[0].name);
        }
    }
    deleteAsset(assetId) {
        this.groupList.forEach(group => {
            if (group.name === this.activeGroup) {
                if (group.features.length == 1) {
                    this.deleteGroup();
                }
                else {
                    group.features = group.features.filter(asset => asset.id != assetId);
                    this.groupsService.addGroup(this.groupList);
                }
            }
        });
    }
    getAssetDisplay(asset) {
        if (asset.assets[0].display_path) {
            return /[^/]*$/.exec(asset.assets[0].display_path)[0];
        }
        else {
            let apath = /[^/]*$/.exec(asset.assets[0].path)[0];
            return apath.slice(0, 15) + "...";
        }
    }
    ngOnDestroy() {
        this.groups$.unsubscribe();
        this.activeFeatureNum$.unsubscribe();
        this.activeGroup$.unsubscribe();
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
        if (this.showSubitem) {
        }
        else {
        }
    }
};
SelectImageComponent.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] }
];
SelectImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/select-image/select-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-image.component.scss */ "./src/app/components/side-bar/select-image/select-image.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]])
], SelectImageComponent);



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background-color: #F1F1F1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbiAgLy8gRklYTUUgVGhpcyBpc24ndCB3b3JraW5nXG4gIC8vIGhlaWdodDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideBarComponent = class SideBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/side-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SideBarComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-generator/tag-generator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  font-size: 0.8em;\n  height: calc(100vh - 50px);\n}\n:host .lat-lon-label {\n  font-size: 0.8em;\n  color: #4d4d4d;\n}\n:host .active-project {\n  background-color: #1aff8c;\n}\n:host .menu button.dropdown.button {\n  padding: 0.85em 1em;\n}\n:host .switch {\n  margin: 0;\n}\n:host .button.tiny {\n  margin: 0;\n}\n:host .no-show-option {\n  display: none;\n}\n:host .show-option {\n  display: block;\n}\n:host .create-prompt {\n  max-height: 500px;\n  height: 500px;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .subitem-title {\n  text-align: left;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .input-label-group {\n  padding: 10px;\n  display: block;\n}\n:host .input-group {\n  display: inline-block;\n}\n:host .form-name {\n  text-align: center;\n}\n:host .input-group-button {\n  display: inline-block;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n  padding: 20px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .button-group {\n  margin: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n:host .form-option-container {\n  padding: 0px;\n}\n:host .list-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #F0F0F0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  display: inline-block;\n  padding: 3px;\n}\n:host .form-item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .form-type-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 5px;\n  margin-bottom: 15px;\n}\n:host .form-type-form input[type=radio] {\n  display: none;\n}\n:host .form-type-form label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ddd;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .form-type-form input[type=radio]:checked + label {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #000;\n}\n:host .changed {\n  color: #F07575;\n}\n:host .unchanged {\n  color: #555555;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWdlbmVyYXRvci90YWctZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1nZW5lcmF0b3IvdGFnLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0RGO0FER0U7RUFDRCxnQkFBQTtFQUNBLGNBQUE7QUNERDtBRElFO0VBQ0QseUJFVmE7QURRZDtBRE1DO0VBQ0UsbUJBQUE7QUNKSDtBRFFFO0VBQ0QsU0FBQTtBQ05EO0FEU0U7RUFDRCxTQUFBO0FDUEQ7QURVRTtFQUNELGFBQUE7QUNSRDtBRFdFO0VBQ0QsY0FBQTtBQ1REO0FEWUU7RUFDRCxpQkFBQTtFQUNBLGFBQUE7QUNWRDtBRGFFO0VBQ0QsZUFBQTtFQUNBLFdBQUE7QUNYRDtBRGNFO0VBQ0QsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNaRDtBRGVFO0VBQ0QsYUFBQTtFQUNBLGNBQUE7QUNiRDtBRGdCRTtFQUNELHFCQUFBO0FDZEQ7QURpQkU7RUFDRCxrQkFBQTtBQ2ZEO0FEa0JFO0VBQ0QscUJBQUE7QUNoQkQ7QURtQkU7RUFDRCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNqQkQ7QURvQkU7RUFDRCxpQkFBQTtBQ2xCRDtBRHFCRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDbkJEO0FEc0JFO0VBQ0QsYUFBQTtBQ3BCRDtBRHVCRTtFQUNELHNCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ3JCRDtBRHdCRTtFQUNELHlCQUFBO0FDdEJEO0FEeUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUN2QkQ7QUQwQkU7RUFDRCxTQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDeEJEO0FEMkJFO0VBQ0QsWUFBQTtBQ3pCRDtBRDRCRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDMUJEO0FENkJFO0VBQ0QseUJBQUE7QUMzQkQ7QUQ4QkU7RUFDRCxZQUFBO0FDNUJEO0FEK0JFO0VBQ0QscUJBQUE7RUFDQSxZQUFBO0FDN0JEO0FEZ0NFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUM5QkQ7QURpQ0U7RUFDRCxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDL0JEO0FEa0NFO0VBQ0QsYUFBQTtBQ2hDRDtBRG1DRTtFQUNELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNqQ0Q7QURvQ0U7RUFDRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQ0Q7QURxQ0U7RUFDRCxjQUFBO0FDbkNEO0FEc0NFO0VBQ0QsY0FBQTtBQ3BDRDtBRHVDRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDckNEO0FEd0NFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUN0Q0Q7QUR5Q0U7RUFDRCx5QkFBQTtBQ3ZDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWdlbmVyYXRvci90YWctZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcblxuICAubGF0LWxvbi1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMC44ZW07XG5cdGNvbG9yOiAjNGQ0ZDRkO1xuICB9XG5cbiAgLmFjdGl2ZS1wcm9qZWN0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGdyZWVuQWN0aXZlO1xuICB9XG5cbiAgLm1lbnUge1xuXHRidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcblx0ICBwYWRkaW5nOiAwLjg1ZW0gMWVtO1xuXHR9XG4gIH1cblxuICAuc3dpdGNoIHtcblx0bWFyZ2luOiAwO1xuICB9XG5cbiAgLmJ1dHRvbi50aW55IHtcblx0bWFyZ2luOiAwO1xuICB9XG5cbiAgLm5vLXNob3ctb3B0aW9uIHtcblx0ZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zaG93LW9wdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmNyZWF0ZS1wcm9tcHQge1xuXHRtYXgtaGVpZ2h0OiA1MDBweDtcblx0aGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5zZWxlY3QtZ3JvdXAge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdGhlaWdodDogMjAlO1xuICB9XG5cbiAgLnN1Yml0ZW0tdGl0bGUge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjb2xvcjogIzU1NTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuaW5wdXQtbGFiZWwtZ3JvdXAge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5mb3JtLW5hbWUge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAtYnV0dG9uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnN1Yml0ZW0ge1xuXHRib3JkZXItd2lkdGg6IDBweCAxMHB4O1xuXHRib3JkZXItY29sb3I6ICNGMUYxRjE7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnN1Yml0ZW0tc2Nyb2xsIHtcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XG4gIH1cblxuICAucHJlc2V0LWRlc2NyaXB0aW9ucyB7XG5cdG1heC1oZWlnaHQ6IDIwJTtcblx0aGVpZ2h0OiAyMCU7XG4gIH1cblxuICAuYm94ZWQgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcblx0ZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ib3hlZCBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG5cbiAgLmJveGVkIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xuICB9XG5cbiAgLmdyb3VwLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbjogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCB7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JtLW9wdGlvbi1jb250YWluZXIge1xuXHRwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAubGlzdC1ncm91cCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbjogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmxpc3Qtc3Vib3B0aW9ucyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIGRpdiB7XG5cdHBhZGRpbmc6IDNweDtcbiAgfVxuXG4gIC5uYW1lLWdyb3VwIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdG1hcmdpbjogMDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmZvcm0tdHlwZS1mb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRtYXJnaW46IDVweDtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tdHlwZS1mb3JtIGxhYmVsIHtcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogI2RkZDtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cblxuICAuZm9ybS10eXBlLWZvcm0gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci13aWR0aDogMXB4O1xuXHRib3JkZXItY29sb3I6ICMwMDA7XG4gIH1cblxuICAuY2hhbmdlZCB7XG5cdGNvbG9yOiAjRjA3NTc1O1xuICB9XG5cbiAgLnVuY2hhbmdlZCB7XG5cdGNvbG9yOiAjNTU1NTU1O1xuICB9XG5cbiAgLmFzc2V0LWxpc3Qge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdGhlaWdodDogMjAlO1xuICB9XG5cbiAgLmFzc2V0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpZ2hsaWdodCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNCM0U1RkY7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xufVxuOmhvc3QgLmxhdC1sb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cbjpob3N0IC5hY3RpdmUtcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWZmOGM7XG59XG46aG9zdCAubWVudSBidXR0b24uZHJvcGRvd24uYnV0dG9uIHtcbiAgcGFkZGluZzogMC44NWVtIDFlbTtcbn1cbjpob3N0IC5zd2l0Y2gge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuYnV0dG9uLnRpbnkge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAubm8tc2hvdy1vcHRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnNob3ctb3B0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY3JlYXRlLXByb21wdCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAuc3ViaXRlbS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5pbnB1dC1sYWJlbC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmZvcm0tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5pbnB1dC1ncm91cC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG46aG9zdCAuc3ViaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogI0YxRjFGMTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCAuc3ViaXRlbS1zY3JvbGwge1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cbjpob3N0IC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuYm94ZWQgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xufVxuOmhvc3QgLmdyb3VwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IC5mb3JtLW9wdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG46aG9zdCAubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmxpc3Qtc3Vib3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIGRpdiB7XG4gIHBhZGRpbmc6IDNweDtcbn1cbjpob3N0IC5uYW1lLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAuZm9ybS1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmZvcm0tdHlwZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbjpob3N0IC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuZm9ybS10eXBlLWZvcm0gbGFiZWwge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbjpob3N0IC5mb3JtLXR5cGUtZm9ybSBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xufVxuOmhvc3QgLmNoYW5nZWQge1xuICBjb2xvcjogI0YwNzU3NTtcbn1cbjpob3N0IC51bmNoYW5nZWQge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cbjpob3N0IC5hc3NldC1saXN0IHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5hc3NldC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xufSIsIiRsaWdodEJsdWU6ICMwZjgzYmQ7XG4kbGlnaHRHcmV5OiAjZDNkM2QzO1xuJGJhY2tncm91bmRIaWdobGlnaHQ6ICNiM2U1ZmY7XG4kZ3JlZW5BY3RpdmU6ICMxYWZmOGM7XG4kQXBwTWVkaXVtQmx1ZTogIzIyYzdmZjtcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-generator/tag-generator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-generator/tag-generator.component.ts ***!
  \******************************************************************************/
/*! exports provided: TagGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagGeneratorComponent", function() { return TagGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TagGeneratorComponent = class TagGeneratorComponent {
    constructor(formsService, groupsService, dialog, router) {
        this.formsService = formsService;
        this.groupsService = groupsService;
        this.dialog = dialog;
        this.router = router;
        this.formOptions = [];
        this.changed = false;
        this.formItemList = [];
        this.openOption = {};
        this.enabledControls = [];
        this.showSubitem = true;
    }
    ngOnInit() {
        this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.formsService.activeFormList.subscribe((next) => {
            this.activeFormList = next;
        });
        this.formOptions = [];
        this.formItemList = [];
        this.formType = 'text';
        this.formName = '';
        this.formLabel = '';
        this.formValue = '';
        this.formRequired = false;
        this.enabledControls = ["Text", "Checkbox", "Radio", "Dropdown"];
    }
    inputFormLabel(event) {
        // this.formLabel = event.target.value.toLowerCase();
        this.formLabel = event.target.value;
    }
    addOptionItem(value) {
        if (value) {
            let formWithValue = this.formOptions.filter(e => e.label == value);
            if (formWithValue.length == 0 && value.length != 0) {
                this.formOptions.push({
                    key: value[0],
                    label: value,
                });
            }
        }
    }
    deleteOption(opt) {
        this.formOptions = this.formOptions.filter(option => option.label != opt.label);
    }
    openRenameModal(template, name) {
        this.selectedGroup = name;
        this.dialog.open(template);
    }
    openRenameOptionModal(template) {
        this.dialog.open(template);
    }
    renameOption(opt, label) {
        if (this.showOpt == "show-option") {
            this.showOpt = "no-show-option";
        }
        else {
            this.showOpt = "show-option";
        }
        label = label.toLowerCase();
        this.formOptions.forEach(e => {
            if (e.label == opt.label) {
                e.label = label;
            }
        });
    }
    selectInputForm(name) {
        this.formType = name;
        this.formLabel = '';
        this.formOptions = [];
    }
    clearOption() {
        this.optionFilter = '';
    }
    clearLabel() {
        this.labelFilter = '';
    }
    addFormItem() {
        let formValueFilter = this.activeFormList.filter(e => e.label == this.formLabel);
        if (formValueFilter.length == 0 && this.formLabel.length != 0) {
            let formItem = {
                type: this.formType,
                name: this.formName,
                label: this.formLabel,
                value: this.formValue,
                required: this.formRequired,
                options: []
            };
            this.openOption[this.formLabel] = false;
            if (this.formType !== "text" && this.formOptions.length != 0) {
                let myOpts = [];
                for (const opt of this.formOptions) {
                    myOpts.push({
                        key: opt[0],
                        label: opt,
                    });
                }
                formItem.options = this.formOptions;
            }
            this.formItemList.push(formItem);
            this.formsService.addForm(this.activeGroup, formItem);
            this.formLabel = '';
            this.formOptions = [];
            this.labelFilter = '';
            this.changed = true;
            this.groupsService.setActivePane("tagger");
            this.router.navigateByUrl('/tagger', { skipLocationChange: true });
        }
    }
    cancelCreate() {
        this.groupsService.setActivePane("tagger");
        this.router.navigateByUrl('/tagger', { skipLocationChange: true });
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
        if (this.showSubitem) {
        }
        else {
        }
    }
};
TagGeneratorComponent.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TagGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-generator/tag-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag-generator.component.scss */ "./src/app/components/side-bar/tag-generator/tag-generator.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_3__["GroupsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], TagGeneratorComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  text-align: left;\n}\n:host .mat-form-field {\n  width: 100%;\n  text-align: left;\n}\n:host .input-group {\n  padding: 5px;\n}\n:host label {\n  padding: 5px;\n}\n:host input {\n  padding: 5px;\n  vertical-align: middle;\n}\n:host .radio-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .form-controls {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy9mb3JtLWdlbmVyYXRvci9mb3JtLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci90YWctaW1hZ2VzL2Zvcm0tZ2VuZXJhdG9yL2Zvcm0tZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBREFFO0VBQ0QsV0FBQTtFQUNBLGdCQUFBO0FDRUQ7QURDRTtFQUNELFlBQUE7QUNDRDtBREVFO0VBQ0QsWUFBQTtBQ0FEO0FER0U7RUFDRCxZQUFBO0VBQ0Esc0JBQUE7QUNERDtBRElFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRkQ7QURLRTtFQUNELGFBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy9mb3JtLWdlbmVyYXRvci9mb3JtLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLm1hdC1mb3JtLWZpZWxkIHtcblx0d2lkdGg6IDEwMCU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAge1xuXHRwYWRkaW5nOiA1cHg7XG4gIH1cblxuICBsYWJlbCB7XG5cdHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIGlucHV0IHtcblx0cGFkZGluZzogNXB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLnJhZGlvLWdyb3VwIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2xzIHtcblx0cGFkZGluZzogMjBweDtcbiAgfVxuXG59XG4iLCI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IC5pbnB1dC1ncm91cCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IGxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xufVxuOmhvc3QgaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCAucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmZvcm0tY29udHJvbHMge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/form-generator/form-generator.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGeneratorComponent", function() { return FormGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let FormGeneratorComponent = class FormGeneratorComponent {
    constructor(formsService) {
        this.formsService = formsService;
        // export class FormGeneratorComponent implements OnInit, OnChanges {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    ngOnInit() {
        this.formGroup$ = this.formsService.formGroup.subscribe((next) => {
            this.form = next;
        });
    }
    get isValid() { return this.form.controls[this.field.label].valid; }
    ngOnDestroy() {
        this.formGroup$.unsubscribe();
    }
};
FormGeneratorComponent.ctorParameters = () => [
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormGeneratorComponent.prototype, "field", void 0);
FormGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-generator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/form-generator/form-generator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-generator.component.scss */ "./src/app/components/side-bar/tag-images/form-generator/form-generator.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]])
], FormGeneratorComponent);



/***/ }),

/***/ "./src/app/components/side-bar/tag-images/tag-images.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/tag-images.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-size: 0.8em;\n  display: block;\n}\n:host .subitem-title {\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: #555;\n  font-size: 14px;\n  padding: 10px;\n  background-color: #F1F1F1;\n}\n:host .subitem {\n  border-width: 0px 10px;\n  border-color: #F1F1F1;\n  border-style: solid;\n  padding: 10px;\n  overflow-y: scroll;\n  background-color: #FFFFFF;\n  height: 100%;\n}\n:host .main-form-container {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  padding: 10px;\n}\n:host .subitem-scroll {\n  border-width: 5px;\n}\n:host .highlight {\n  background-color: #B3E5FF;\n}\n:host .boxed input[type=radio] {\n  display: none;\n}\n:host .boxed label {\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n:host .boxed input[type=radio]:checked + label {\n  background-color: #B3E5FF;\n}\n:host .group-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .select-group {\n  max-height: 20%;\n  height: 20%;\n}\n:host .tag-forms {\n  height: 500px;\n}\n:host .asset-list {\n  max-height: 20%;\n  height: 20%;\n}\n:host .asset-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  cursor: pointer;\n}\n:host .preset-descriptions {\n  max-height: 20%;\n  height: 20%;\n}\n:host .form-item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .button-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n}\n:host .button-group div {\n  padding: 3px;\n}\n:host .name-group {\n  padding: 3px;\n  font-size: 17px;\n  font-weight: bold;\n}\n:host .list-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin: 0;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host .list-suboptions {\n  background-color: #F0F0F0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3F1ZW5ueS9EZXNrdG9wL3RhZ2dpdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy90YWctaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3RhZy1pbWFnZXMvdGFnLWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUU7RUFDRCxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0ZEO0FES0U7RUFDRCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRDtBRE1FO0VBQ0QsYUFBQTtBQ0pEO0FET0U7RUFDRCxhQUFBO0FDTEQ7QURRRTtFQUNELGlCQUFBO0FDTkQ7QURTRTtFQUNELHlCQUFBO0FDUEQ7QURVRTtFQUNELGFBQUE7QUNSRDtBRFdFO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDVEQ7QURZRTtFQUNELHlCQUFBO0FDVkQ7QURhRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDWEQ7QURjRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDWkQ7QURlRTtFQUdELGFBQUE7QUNmRDtBRGtCRTtFQUNELGVBQUE7RUFDQSxXQUFBO0FDaEJEO0FEbUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGVBQUE7QUNqQkQ7QURvQkU7RUFDRCxlQUFBO0VBQ0EsV0FBQTtBQ2xCRDtBRHFCRTtFQUNELG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDbkJEO0FEc0JFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtBQ3BCRDtBRHVCRTtFQUNELFlBQUE7QUNyQkQ7QUR3QkU7RUFDRCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDdEJEO0FEeUJFO0VBQ0Qsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUN2QkQ7QUQwQkU7RUFDRCx5QkFBQTtBQ3hCRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvdGFnLWltYWdlcy90YWctaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcblxuICAuc3ViaXRlbS10aXRsZSB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y29sb3I6ICM1NTU7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbiAgfVxuXG4gIC5zdWJpdGVtIHtcblx0Ym9yZGVyLXdpZHRoOiAwcHggMTBweDtcblx0Ym9yZGVyLWNvbG9yOiAjRjFGMUYxO1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYWluLWZvcm0tY29udGFpbmVyIHtcblx0cGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5zdWJpdGVtLXNjcm9sbCB7XG5cdHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3ViaXRlbS1zY3JvbGwge1xuXHRib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuXG4gIC5oaWdobGlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xuICB9XG5cbiAgLmJveGVkIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG5cdGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm94ZWQgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuXG4gIC5ib3hlZCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbiAgfVxuXG4gIC5ncm91cC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zZWxlY3QtZ3JvdXAge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdGhlaWdodDogMjAlO1xuICB9XG5cbiAgLnRhZy1mb3JtcyB7XG5cdC8vIG1heC1oZWlnaHQ6IDUwJTtcblx0Ly8gaGVpZ2h0OiBhdXRvO1xuXHRoZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLmFzc2V0LWxpc3Qge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdGhlaWdodDogMjAlO1xuICB9XG5cbiAgLmFzc2V0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnByZXNldC1kZXNjcmlwdGlvbnMge1xuXHRtYXgtaGVpZ2h0OiAyMCU7XG5cdGhlaWdodDogMjAlO1xuICB9XG5cbiAgLmZvcm0taXRlbS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5idXR0b24tZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IDA7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIGRpdiB7XG5cdHBhZGRpbmc6IDNweDtcbiAgfVxuXG4gIC5uYW1lLWdyb3VwIHtcblx0cGFkZGluZzogM3B4O1xuXHRmb250LXNpemU6IDE3cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXJnaW46IDA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5saXN0LXN1Ym9wdGlvbnMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLnN1Yml0ZW0tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG59XG46aG9zdCAuc3ViaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogI0YxRjFGMTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAubWFpbi1mb3JtLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuc3ViaXRlbS1zY3JvbGwge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLnN1Yml0ZW0tc2Nyb2xsIHtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59XG46aG9zdCAuaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IzRTVGRjtcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuYm94ZWQgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbjpob3N0IC5ib3hlZCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjNFNUZGO1xufVxuOmhvc3QgLmdyb3VwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLnNlbGVjdC1ncm91cCB7XG4gIG1heC1oZWlnaHQ6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG46aG9zdCAudGFnLWZvcm1zIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbjpob3N0IC5hc3NldC1saXN0IHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5hc3NldC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5wcmVzZXQtZGVzY3JpcHRpb25zIHtcbiAgbWF4LWhlaWdodDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cbjpob3N0IC5mb3JtLWl0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAuYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmJ1dHRvbi1ncm91cCBkaXYge1xuICBwYWRkaW5nOiAzcHg7XG59XG46aG9zdCAubmFtZS1ncm91cCB7XG4gIHBhZGRpbmc6IDNweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IC5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAubGlzdC1zdWJvcHRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/side-bar/tag-images/tag-images.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/side-bar/tag-images/tag-images.component.ts ***!
  \************************************************************************/
/*! exports provided: TagImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagImagesComponent", function() { return TagImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forms.service */ "./src/app/services/forms.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TagImagesComponent = class TagImagesComponent {
    constructor(groupsService, formsService, dialog, router) {
        this.groupsService = groupsService;
        this.formsService = formsService;
        this.dialog = dialog;
        this.router = router;
        this.openOption = {};
        this.showSubitem = true;
    }
    ngOnInit() {
        this.activeGroup$ = this.activeGroup$ = this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.activeFeatureId$ = this.groupsService.activeFeatureId.subscribe((next) => {
            this.activeFeatureId = next;
        });
        this.formGroup$ = this.formsService.formGroup.subscribe((next) => {
            this.form = next;
        });
    }
    openRenameModal(template, name) {
        this.selectedGroup = name;
        this.dialog.open(template);
    }
    openRenameOptionModal(template) {
        this.dialog.open(template);
    }
    openOptionToggle(label) {
        if (this.openOption[label]) {
            this.openOption[label] = false;
        }
        else {
            this.openOption[label] = true;
        }
    }
    createNewTag() {
        this.groupsService.setActivePane("preset");
        this.router.navigateByUrl('/preset', { skipLocationChange: true });
    }
    onSubmit() {
        this.payload = this.form.getRawValue();
        console.log(this.payload);
        this.groupsService.setTagFeatureGroup(this.activeGroup, this.activeFeatureId, this.payload);
    }
    ngOnDestroy() {
        this.formGroup$.unsubscribe();
        this.activeFeatureId$.unsubscribe();
        this.activeGroup$.unsubscribe();
    }
    expandPanel() {
        this.showSubitem = !this.showSubitem;
        if (this.showSubitem) {
        }
        else {
        }
    }
};
TagImagesComponent.ctorParameters = () => [
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] },
    { type: _services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TagImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-bar/tag-images/tag-images.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag-images.component.scss */ "./src/app/components/side-bar/tag-images/tag-images.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"],
        _services_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], TagImagesComponent);



/***/ }),

/***/ "./src/app/components/via/via.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/via/via.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nbody {\n  min-width: 200px;\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\ninput[type=text] {\n  border: 1px solid #cccccc;\n  margin: 0.6rem 0;\n  padding: 0.2rem 0.4rem;\n}\na {\n  text-decoration: none;\n}\ntextarea {\n  border: 1px solid #cccccc;\n  margin: 0.6rem 0;\n  padding: 0.2rem 0.4rem;\n}\n.top_panel {\n  font-size: 0.9rem;\n  display: block;\n  background-color: #212121;\n  color: #ffffff;\n  z-index: 1001;\n  margin-bottom: 1rem;\n}\n.menubar {\n  display: inline-block;\n  height: 1.8rem;\n}\n.menubar a:link {\n  color: #eeeeee;\n  text-decoration: none;\n}\n.menubar a:visited {\n  color: #eeeeee;\n  text-decoration: none;\n}\n.menubar ul {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n.menubar li {\n  display: inline;\n  float: left;\n  padding: 0.45rem 1rem;\n}\n.menubar li:hover {\n  background-color: #616161;\n  cursor: default;\n}\n.menubar li:hover ul {\n  display: block;\n}\n.menubar li ul {\n  display: none;\n  background-color: #212121;\n  border: 1px solid #616161;\n  min-width: 10rem;\n  position: absolute;\n  z-index: 100;\n  margin: 0.4rem -1rem;\n}\n.menubar li ul li {\n  display: block;\n  float: none;\n  color: #eeeeee;\n  margin: 0;\n  padding: 0.6rem 1rem;\n}\n.menubar li ul li:hover {\n  cursor: pointer;\n}\n.menubar li ul li.submenu_divider {\n  margin: 0 0.4rem;\n  padding: 0;\n  height: 1px;\n  border-bottom: 1px solid #424242;\n}\n.toolbar {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  margin-left: 0rem;\n}\n.toolbar svg {\n  fill: white;\n  margin: 0.2rem 0.1rem;\n  height: 1.2rem;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.toolbar svg:hover {\n  fill: yellow;\n  cursor: pointer;\n}\n.toolbar svg:active {\n  fill: white;\n}\n.toolbar ul {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  padding: 0.1rem;\n  margin: 0;\n}\n.toolbar li {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  float: left;\n  padding: 0rem 0.1rem;\n  border: 1px solid white;\n}\n.toolbar li:hover {\n  color: red;\n  cursor: pointer;\n}\n.middle_panel {\n  display: table-cell;\n  table-layout: flex;\n  width: 100%;\n  z-index: 1;\n  padding: 0;\n}\n#leftsidebar {\n  display: table-cell;\n  z-index: 10;\n  vertical-align: top;\n}\n#display_area {\n  display: table-cell;\n  width: 100%;\n  z-index: 1;\n  margin: 0;\n  padding-left: 1em;\n  vertical-align: top;\n}\n#image_panel {\n  position: relative;\n  outline: none;\n}\n#image_panel img {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n#image_panel canvas {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  outline: none;\n}\n#image_panel .visible {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n#image_panel label > img {\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  width: auto;\n  height: 4em;\n  outline: none;\n}\n#image_grid_panel {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n#image_grid_panel #image_grid_toolbar {\n  display: block;\n  font-size: small;\n  padding: 0.5rem 0;\n}\n#image_grid_panel #image_grid_toolbar select {\n  font-size: small;\n}\n#image_grid_panel #image_grid_toolbar .tool {\n  display: inline;\n  margin: 0 0.5rem;\n}\n#image_grid_panel #image_grid_group_panel {\n  font-size: small;\n}\n#image_grid_panel #image_grid_group_panel select {\n  font-size: small;\n}\n#image_grid_panel #image_grid_group_panel .image_grid_group_toolbar {\n  display: inline;\n  margin-left: 2rem;\n}\n#image_grid_panel #image_grid_group_panel .image_grid_group_toolbar select {\n  margin: 0 0.2rem;\n  padding: 0;\n  font-size: small;\n}\n#image_grid_panel #image_grid_nav {\n  display: inline;\n  font-size: small;\n  padding-left: 0.5rem;\n  margin-top: 0.2rem;\n}\n#image_grid_panel #image_grid_nav span {\n  margin: 0 0.2rem;\n}\n#image_grid_panel #image_grid_content {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\n#image_grid_panel #image_grid_content #image_grid_content_img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n#image_grid_panel #image_grid_content #image_grid_content_img img {\n  margin: 0.3em;\n  padding: 0;\n  border: 0.2em solid #ffffff;\n  outline: 0.1em solid #0066ff;\n}\n#image_grid_panel #image_grid_content #image_grid_content_img .not_sel {\n  opacity: 0.6;\n  outline: none;\n}\n#image_grid_panel #image_grid_content #image_grid_content_rshape {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n#image_grid_panel #image_grid_content img {\n  float: left;\n  margin: 0;\n}\n#leftsidebar_collapse_panel {\n  display: none;\n  position: relative;\n  z-index: 10;\n  vertical-align: top;\n}\n#leftsidebar_show_button {\n  font-size: large;\n  margin-left: 0.1rem;\n}\n#leftsidebar_show_button:hover {\n  color: red;\n  cursor: pointer;\n}\nbutton.leftsidebar_accordion {\n  font-size: large;\n  background-color: #f2f2f2;\n  cursor: pointer;\n  padding: 0.5em 0.5em;\n  width: 100%;\n  text-align: left;\n  border: 0;\n  outline: none;\n}\nbutton.leftsidebar_accordion:focus {\n  outline: none;\n}\nbutton.leftsidebar_accordion:after {\n  content: \"➕\";\n  color: #4d4d4d;\n  float: right;\n}\nbutton.leftsidebar_accordion.active:after {\n  content: \"➖\";\n}\nbutton.leftsidebar_accordion.active, button.leftsidebar_accordion:hover {\n  background-color: #e6e6e6;\n}\n.leftsidebar_accordion_panel {\n  display: none;\n  padding: 0 0.5em;\n  font-size: small;\n  border-right: 2px solid #f2f2f2;\n  border-bottom: 2px solid #f2f2f2;\n}\n.leftsidebar_accordion_panel.show {\n  display: block;\n}\n.leftsidebar_accordion_panel table {\n  border-collapse: collapse;\n}\n.leftsidebar_accordion_panel td {\n  border: 1px solid #f2f2f2;\n  padding: 0.2rem 0.4rem;\n}\n.button_panel {\n  display: inline-block;\n  width: 100%;\n  margin: 0.2rem 0;\n}\n.button_panel .flush_right {\n  float: right;\n}\n.button_panel .active {\n  border-bottom: 1px solid black;\n}\n.button_panel .button {\n  display: inline-block;\n  padding: 0.35rem 0.5rem;\n  margin: 0 0.05rem;\n  cursor: pointer;\n  background-color: #cccccc;\n  border-radius: 0.2rem;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.button_panel .button:hover {\n  background-color: black;\n  color: white;\n}\n.button_panel .text_button, .text_button {\n  color: #0000ff;\n  padding: 0.2rem 0.2rem;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.button_panel .text_button:hover, .text_button:hover {\n  cursor: pointer;\n}\n.button_panel .text_button:active, .text_button:active {\n  color: #000000;\n}\n#attribute_properties {\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  border: 1px solid #cccccc;\n}\n#attribute_properties .property {\n  display: table-row;\n}\n#attribute_properties .property span {\n  display: table-cell;\n  padding: 0.2rem 0.4rem;\n}\n#attribute_properties .property span input {\n  width: 100%;\n  border: 1px solid #cccccc;\n  margin: 0;\n}\n#attribute_properties .property span input:focus {\n  border: 1px solid black;\n}\n#attribute_properties .property span select {\n  width: 100%;\n  border: 1px solid #cccccc;\n  margin: 0;\n}\n#attribute_options {\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n  border: 1px solid #cccccc;\n  table-layout: fixed;\n}\n#attribute_options .new_option_id_entry {\n  display: inline-block;\n  padding: 1rem 0.2rem;\n}\n#attribute_options .new_option_id_entry input {\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  margin: 0;\n  font-size: 0.8rem;\n}\n#attribute_options .property {\n  display: table-row;\n}\n#attribute_options .property span {\n  display: table-cell;\n  padding: 0.2rem 0.2rem;\n  font-weight: bold;\n}\n#attribute_options .property span input[type=checkbox] {\n  vertical-align: middle;\n}\n#attribute_options .property span input[type=radio] {\n  vertical-align: middle;\n}\n#attribute_options .property input {\n  display: table-cell;\n  width: 94%;\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  margin: 0;\n  font-size: 0.8rem;\n}\n#attribute_options .property input:focus {\n  border-bottom: 1px solid #000000;\n  background-color: #f2f2f2;\n  color: #000000;\n}\n#user_input_panel {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1002;\n}\n#user_input_panel .content {\n  position: fixed;\n  background-color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  padding: 2rem 4rem;\n}\n#user_input_panel .content .title {\n  font-size: large;\n  font-weight: bold;\n}\n#user_input_panel .content .user_inputs {\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n}\n#user_input_panel .content .user_inputs .row {\n  display: table-row;\n}\n#user_input_panel .content .user_inputs .cell {\n  display: table-cell;\n  padding: 1rem 0.5rem;\n  vertical-align: middle;\n  border: 1px solid #f2f2f2;\n}\n#user_input_panel .content .user_confirm {\n  display: table;\n  width: 100%;\n  text-align: center;\n  margin: 2rem 0;\n}\n#user_input_panel .content .user_confirm .ok {\n  display: table-cell;\n  width: 48%;\n}\n#user_input_panel .content .user_confirm .cancel {\n  display: table-cell;\n  width: 48%;\n}\n#user_input_panel .content .warning {\n  color: red;\n}\n#annotation_editor_panel {\n  position: fixed;\n  display: none;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  border-top: 2px solid #cccccc;\n  padding: 0.2em 1em;\n  overflow: auto;\n  z-index: 1001;\n  box-shadow: 0 0 1em #cccccc;\n}\n#annotation_editor {\n  display: table;\n  margin-bottom: 3em;\n  border-collapse: collapse;\n  font-size: inherit;\n  position: absolute;\n  background-color: white;\n}\n#annotation_editor .row {\n  display: table-row;\n}\n#annotation_editor .highlight .col {\n  background-color: #e6e6e6;\n}\n#annotation_editor .col {\n  display: table-cell;\n  padding: 0.4em 0.6em;\n  border: 1px solid #000000;\n  vertical-align: middle;\n  font-size: inherit;\n}\n#annotation_editor .col input[type=checkbox] {\n  vertical-align: middle;\n}\n#annotation_editor .col input[type=radio] {\n  vertical-align: middle;\n  font-size: inherit;\n}\n#annotation_editor .col label {\n  vertical-align: middle;\n  font-size: inherit;\n}\n#annotation_editor .col textarea {\n  border: 0.1em solid #cccccc;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n  background-color: #ffffff;\n}\n#annotation_editor .col textarea:focus {\n  border: 0.1em dashed #cccccc;\n}\n#annotation_editor .col span {\n  display: block;\n}\n#annotation_editor .col horizontal_container {\n  display: inline-block;\n}\n#annotation_editor .col .img_options {\n  display: inline;\n}\n#annotation_editor .col .img_options .imrow {\n  display: block;\n}\n#annotation_editor .col .img_options span {\n  display: inline-block;\n  margin: 0.2rem 0.4rem;\n}\n#annotation_editor .col .img_options span img {\n  height: 4em;\n}\n#annotation_editor .col .img_options p {\n  margin: 0;\n  padding: 0;\n  font-size: inherit;\n}\n#annotation_editor .col .img_options input[type=radio] {\n  display: none;\n}\n#annotation_editor .col .img_options input[type=radio] + label {\n  display: block;\n  cursor: pointer;\n  text-align: center;\n}\n#annotation_editor .col .img_options input[type=radio]:checked + label {\n  border: 0.1em solid black;\n  background-color: #cccccc;\n  cursor: default;\n  font-size: inherit;\n}\n#annotation_editor .header {\n  font-weight: bold;\n}\n#annotation_editor .id {\n  font-weight: bold;\n}\n#project_info_panel {\n  display: table;\n  border-collapse: collapse;\n  font-size: 0.8rem;\n}\n#project_info_panel .row {\n  display: table-row;\n}\n#project_info_panel .col {\n  display: table-cell;\n  padding: 0.4rem 0.1rem;\n  border: none;\n}\n#project_info_panel .col input[type=text] {\n  font-size: 0.8rem;\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  margin: 0;\n  width: 100%;\n}\n#project_info_panel .col input:focus {\n  border-bottom: 1px solid #000000;\n  background-color: #f2f2f2;\n  color: #000000;\n}\nul.region_shape {\n  font-size: xx-large;\n  list-style-type: none;\n  overflow: hidden;\n  padding: 0.4em 0;\n  margin: 0;\n}\nul.region_shape li {\n  float: left;\n  padding: 0 0.2em;\n  fill: #ffffff;\n  stroke: #000000;\n}\nul.region_shape li:hover {\n  cursor: pointer;\n  fill: #ffffff;\n  stroke: #ff0000;\n}\nul.region_shape .selected {\n  fill: #ffffff;\n  stroke: #ff0000;\n}\n#region_info {\n  font-size: 0.8em;\n  margin-bottom: 0.4em;\n}\n#img_fn_list {\n  display: none;\n  font-size: small;\n  overflow: scroll;\n  min-height: 10rem;\n  max-height: 25rem;\n}\n#img_fn_list ul {\n  position: relative;\n  line-height: 1.3em;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n#img_fn_list li {\n  white-space: nowrap;\n  display: block;\n  padding: 0 0.4rem;\n}\n#img_fn_list li:hover {\n  background-color: #d5e5ff;\n  cursor: pointer;\n}\n#img_fn_list .error {\n  color: red;\n}\n#img_fn_list .sel {\n  border-left: 0.2rem solid black !important;\n  font-weight: bold;\n}\n#img_fn_list .buffered {\n  border-left: 0.2rem solid #cccccc;\n}\n#message_panel {\n  display: block;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  z-index: 9999;\n  text-align: center;\n}\n#message_panel .content {\n  display: inline;\n  margin: auto;\n  background-color: #000000;\n  color: #ffff00;\n  font-size: small;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 2rem;\n  padding: 0.5rem 2rem;\n}\n.text_panel {\n  display: none;\n  margin: auto;\n  font-size: medium;\n  line-height: 1.3em;\n  margin: 0;\n  max-width: 700px;\n}\n.text_panel li {\n  margin: 1em 0;\n  text-align: left;\n}\n.text_panel p {\n  text-align: left;\n}\n.svg_button:hover {\n  cursor: pointer;\n}\n.loading_spinbox {\n  display: inline-block;\n  border: 0.4em solid #cccccc;\n  border-radius: 50%;\n  border-top: 0.4em solid black;\n  border-bottom: 0.4em solid black;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.display_none {\n  display: none !important;\n}\n.display_block {\n  display: block !important;\n}\n#settings_panel {\n  font-size: 1rem;\n  border-collapse: collapse;\n  width: 95%;\n}\n#settings_panel a {\n  border: 1px solid #f2f2f2;\n}\n#settings_panel .row {\n  display: table-row;\n  border-bottom: 1px solid #f2f2f2;\n}\n#settings_panel .variable {\n  display: table-cell;\n  width: 60%;\n  padding: 0.5rem 0.5rem;\n}\n#settings_panel .variable div {\n  display: block;\n}\n#settings_panel .variable .desc {\n  font-size: 0.7em;\n  color: #808080;\n  padding: 0.2rem 0rem;\n}\n#settings_panel .value {\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 1rem;\n}\n.narrow_page_content {\n  width: 60%;\n}\n.narrow_page_content li {\n  font-size: 0.9rem;\n  margin: 0.4rem 0;\n}\n.force_small_font {\n  font-size: small !important;\n}\n.key {\n  font-family: monospace;\n  padding: 1px 6px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#f0f0f0), to(#fcfcfc));\n  background: linear-gradient(to bottom, #f0f0f0, #fcfcfc);\n  border: 1px solid #e0e0e0;\n  white-space: nowrap;\n  color: #303030;\n  border-bottom-width: 2px;\n  border-radius: 3px;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWEvdmlhLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcXVlbm55L0Rlc2t0b3AvdGFnZ2l0L3NyYy9hcHAvY29tcG9uZW50cy92aWEvdmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NmO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEQ0Y7QUNFQTtFQUNDLHNCQUFBO0FEQ0Q7QUNDQTtFQUNDLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBREVEO0FDQUE7RUFDQyxxQkFBQTtBREdEO0FDREE7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QURJRDtBQ0ZBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FES0Q7QUNIQTtFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBRE1EO0FDSkU7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QURNSDtBQ0pFO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FETUg7QUNIQztFQUNDLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREtGO0FDSEM7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FES0Y7QUNKRTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtBRE1IO0FDTEc7RUFDQyxjQUFBO0FET0o7QUNKRTtFQUNDLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBRE1IO0FDTEc7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QURPSjtBQ05JO0VBQ0MsZUFBQTtBRFFMO0FDTkk7RUFDQyxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QURRTDtBQ0ZBO0VBQ0MsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGlCQUFBO0FES0Q7QUNKQztFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURNRjtBQ0xFO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QURPSDtBQ0xFO0VBQ0MsV0FBQTtBRE9IO0FDSkM7RUFDQywyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QURNRjtBQ0pDO0VBQ0MsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FETUY7QUNMRTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FET0g7QUNIQTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURNRDtBQ0pBO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURPRDtBQ0xBO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEUUQ7QUNOQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBRFNEO0FDUkM7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEVUY7QUNSQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FEVUY7QUNSQztFQUNDLDhCQUFBO0VBQ0EscUJBQUE7QURVRjtBQ1BFO0VBQ0MsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURTSDtBQ0xBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QURRRDtBQ1BDO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURTRjtBQ1JFO0VBQ0MsZ0JBQUE7QURVSDtBQ1JFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FEVUg7QUNQQztFQUNDLGdCQUFBO0FEU0Y7QUNSRTtFQUNDLGdCQUFBO0FEVUg7QUNSRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBRFVIO0FDVEc7RUFDQyxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRFdKO0FDUEM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEU0Y7QUNSRTtFQUNDLGdCQUFBO0FEVUg7QUNQQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QURTRjtBQ1JFO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEVUg7QUNURztFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBRFdKO0FDVEc7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBRFdKO0FDUkU7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBRFVIO0FDUkU7RUFDQyxXQUFBO0VBQ0EsU0FBQTtBRFVIO0FDTkE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURTRDtBQ1BBO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBRFVEO0FDVEM7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBRFdGO0FDUEM7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QURVRjtBQ1RFO0VBQ0MsYUFBQTtBRFdIO0FDVEU7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURXSDtBQ1JHO0VBQ0MsWUFBQTtBRFVKO0FDTEE7RUFDQyx5QkFBQTtBRFFEO0FDTkE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QURTRDtBQ1JDO0VBQ0MsY0FBQTtBRFVGO0FDUkM7RUFDQyx5QkFBQTtBRFVGO0FDUkM7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0FEVUY7QUNQQTtFQUNDLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEVUQ7QUNUQztFQUNDLFlBQUE7QURXRjtBQ1RDO0VBQ0MsOEJBQUE7QURXRjtBQ1RDO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURXRjtBQ1ZFO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0FEWUg7QUNSQTtFQUNDLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRFdEO0FDVEE7RUFDQyxlQUFBO0FEWUQ7QUNWQTtFQUNDLGNBQUE7QURhRDtBQ1hBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRGNEO0FDYkM7RUFDQyxrQkFBQTtBRGVGO0FDZEU7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FEZ0JIO0FDZkc7RUFDQyxXQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FEaUJKO0FDaEJJO0VBQ0MsdUJBQUE7QURrQkw7QUNmRztFQUNDLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QURpQko7QUNaQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRGVEO0FDZEM7RUFDQyxxQkFBQTtFQUNBLG9CQUFBO0FEZ0JGO0FDZkU7RUFDQyxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURpQkg7QUNkQztFQUNDLGtCQUFBO0FEZ0JGO0FDZkU7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QURpQkg7QUNoQkc7RUFDQyxzQkFBQTtBRGtCSjtBQ2hCRztFQUNDLHNCQUFBO0FEa0JKO0FDZkU7RUFDQyxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURpQkg7QUNoQkc7RUFDQyxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRGtCSjtBQ2JBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QURnQkQ7QUNmQztFQUNDLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FEaUJGO0FDaEJFO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBRGtCSDtBQ2hCRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURrQkg7QUNqQkc7RUFDQyxrQkFBQTtBRG1CSjtBQ2pCRztFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FEbUJKO0FDaEJFO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURrQkg7QUNqQkc7RUFDQyxtQkFBQTtFQUNBLFVBQUE7QURtQko7QUNqQkc7RUFDQyxtQkFBQTtFQUNBLFVBQUE7QURtQko7QUNoQkU7RUFDQyxVQUFBO0FEa0JIO0FDZEE7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QURpQkQ7QUNmQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FEa0JEO0FDakJDO0VBQ0Msa0JBQUE7QURtQkY7QUNoQkU7RUFDQyx5QkFBQTtBRGtCSDtBQ2ZDO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRGlCRjtBQ2hCRTtFQUNDLHNCQUFBO0FEa0JIO0FDaEJFO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtBRGtCSDtBQ2hCRTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7QURrQkg7QUNoQkU7RUFDQywyQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRGtCSDtBQ2pCRztFQUNDLDRCQUFBO0FEbUJKO0FDaEJFO0VBQ0MsY0FBQTtBRGtCSDtBQ2hCRTtFQUNDLHFCQUFBO0FEa0JIO0FDaEJFO0VBQ0MsZUFBQTtBRGtCSDtBQ2pCRztFQUNDLGNBQUE7QURtQko7QUNqQkc7RUFDQyxxQkFBQTtFQUNBLHFCQUFBO0FEbUJKO0FDbEJJO0VBQ0MsV0FBQTtBRG9CTDtBQ2pCRztFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURtQko7QUNqQkc7RUFDQyxhQUFBO0FEbUJKO0FDbEJJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRG9CTDtBQ2hCSTtFQUNDLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURrQkw7QUNiQztFQUNDLGlCQUFBO0FEZUY7QUNiQztFQUNDLGlCQUFBO0FEZUY7QUNaQTtFQUNDLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FEZUQ7QUNkQztFQUNDLGtCQUFBO0FEZ0JGO0FDZEM7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRGdCRjtBQ2ZFO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRGlCSDtBQ2RHO0VBQ0MsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QURnQko7QUNWQztFQUNDLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBRGFGO0FDWkU7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRGNIO0FDYkc7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURlSjtBQ1pFO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QURjSDtBQ1ZBO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtBRGFEO0FDWEE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURjRDtBQ2JDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QURlRjtBQ2JDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURlRjtBQ2RFO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0FEZ0JIO0FDYkM7RUFDQyxVQUFBO0FEZUY7QUNiQztFQUNDLDBDQUFBO0VBQ0EsaUJBQUE7QURlRjtBQ2JDO0VBQ0MsaUNBQUE7QURlRjtBQ1pBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRGVEO0FDZEM7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBRGdCRjtBQ2JBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FEZ0JEO0FDZkM7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7QURpQkY7QUNmQztFQUNDLGdCQUFBO0FEaUJGO0FDYkM7RUFDQyxlQUFBO0FEZ0JGO0FDYkE7RUFDQyxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBRGdCRDtBQ2JBO0VBQ0Msd0JBQUE7QURnQkQ7QUNkQTtFQUNDLHlCQUFBO0FEaUJEO0FDZkE7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FEa0JEO0FDakJDO0VBQ0MseUJBQUE7QURtQkY7QUNqQkM7RUFDQyxrQkFBQTtFQUNBLGdDQUFBO0FEbUJGO0FDakJDO0VBQ0MsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QURtQkY7QUNsQkU7RUFDQyxjQUFBO0FEb0JIO0FDaEJFO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QURrQkg7QUNmQztFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRGlCRjtBQ1pBO0VBQ0MsVUFBQTtBRGVEO0FDZEM7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0FEZ0JGO0FDYkE7RUFDQywyQkFBQTtBRGdCRDtBQ2RBO0VBQ0Msc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVGQUFBO0VBQUEsd0RBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGlCRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlhL3ZpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIG1hcmdpbjogMC42cmVtIDA7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luOiAwLjZyZW0gMDtcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbn1cblxuLnRvcF9wYW5lbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwMDE7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tZW51YmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEuOHJlbTtcbn1cbi5tZW51YmFyIGE6bGluayB7XG4gIGNvbG9yOiAjZWVlZWVlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWVudWJhciBhOnZpc2l0ZWQge1xuICBjb2xvcjogI2VlZWVlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1lbnViYXIgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLm1lbnViYXIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwLjQ1cmVtIDFyZW07XG59XG4ubWVudWJhciBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5tZW51YmFyIGxpOmhvdmVyIHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudWJhciBsaSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTYxNjE7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICBtYXJnaW46IDAuNHJlbSAtMXJlbTtcbn1cbi5tZW51YmFyIGxpIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogI2VlZWVlZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcbn1cbi5tZW51YmFyIGxpIHVsIGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnViYXIgbGkgdWwgbGkuc3VibWVudV9kaXZpZGVyIHtcbiAgbWFyZ2luOiAwIDAuNHJlbTtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MjQyO1xufVxuXG4udG9vbGJhciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cbi50b29sYmFyIHN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xuICBtYXJnaW46IDAuMnJlbSAwLjFyZW07XG4gIGhlaWdodDogMS4ycmVtO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udG9vbGJhciBzdmc6aG92ZXIge1xuICBmaWxsOiB5ZWxsb3c7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b29sYmFyIHN2ZzphY3RpdmUge1xuICBmaWxsOiB3aGl0ZTtcbn1cbi50b29sYmFyIHVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLnRvb2xiYXIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDByZW0gMC4xcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi50b29sYmFyIGxpOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWlkZGxlX3BhbmVsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGFibGUtbGF5b3V0OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMDtcbn1cblxuI2xlZnRzaWRlYmFyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgei1pbmRleDogMTA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNkaXNwbGF5X2FyZWEge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI2ltYWdlX3BhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuI2ltYWdlX3BhbmVsIGltZyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuI2ltYWdlX3BhbmVsIGNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNpbWFnZV9wYW5lbCAudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuI2ltYWdlX3BhbmVsIGxhYmVsID4gaW1nIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA0ZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpbWFnZV9ncmlkX3BhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2ltYWdlX2dyaWRfcGFuZWwgI2ltYWdlX2dyaWRfdG9vbGJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbiNpbWFnZV9ncmlkX3BhbmVsICNpbWFnZV9ncmlkX3Rvb2xiYXIgc2VsZWN0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbiNpbWFnZV9ncmlkX3BhbmVsICNpbWFnZV9ncmlkX3Rvb2xiYXIgLnRvb2wge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9ncm91cF9wYW5lbCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9ncm91cF9wYW5lbCBzZWxlY3Qge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuI2ltYWdlX2dyaWRfcGFuZWwgI2ltYWdlX2dyaWRfZ3JvdXBfcGFuZWwgLmltYWdlX2dyaWRfZ3JvdXBfdG9vbGJhciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9ncm91cF9wYW5lbCAuaW1hZ2VfZ3JpZF9ncm91cF90b29sYmFyIHNlbGVjdCB7XG4gIG1hcmdpbjogMCAwLjJyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9uYXYge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9uYXYgc3BhbiB7XG4gIG1hcmdpbjogMCAwLjJyZW07XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9jb250ZW50ICNpbWFnZV9ncmlkX2NvbnRlbnRfaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9jb250ZW50ICNpbWFnZV9ncmlkX2NvbnRlbnRfaW1nIGltZyB7XG4gIG1hcmdpbjogMC4zZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgI2ZmZmZmZjtcbiAgb3V0bGluZTogMC4xZW0gc29saWQgIzAwNjZmZjtcbn1cbiNpbWFnZV9ncmlkX3BhbmVsICNpbWFnZV9ncmlkX2NvbnRlbnQgI2ltYWdlX2dyaWRfY29udGVudF9pbWcgLm5vdF9zZWwge1xuICBvcGFjaXR5OiAwLjY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCAjaW1hZ2VfZ3JpZF9jb250ZW50ICNpbWFnZV9ncmlkX2NvbnRlbnRfcnNoYXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuI2ltYWdlX2dyaWRfcGFuZWwgI2ltYWdlX2dyaWRfY29udGVudCBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbGVmdHNpZGViYXJfY29sbGFwc2VfcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jbGVmdHNpZGViYXJfc2hvd19idXR0b24ge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tbGVmdDogMC4xcmVtO1xufVxuI2xlZnRzaWRlYmFyX3Nob3dfYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ubGVmdHNpZGViYXJfYWNjb3JkaW9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvbi5sZWZ0c2lkZWJhcl9hY2NvcmRpb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uLmxlZnRzaWRlYmFyX2FjY29yZGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p6VXCI7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmbG9hdDogcmlnaHQ7XG59XG5idXR0b24ubGVmdHNpZGViYXJfYWNjb3JkaW9uLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p6WXCI7XG59XG5cbmJ1dHRvbi5sZWZ0c2lkZWJhcl9hY2NvcmRpb24uYWN0aXZlLCBidXR0b24ubGVmdHNpZGViYXJfYWNjb3JkaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmxlZnRzaWRlYmFyX2FjY29yZGlvbl9wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMmYyZjI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjJmMmYyO1xufVxuLmxlZnRzaWRlYmFyX2FjY29yZGlvbl9wYW5lbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGVmdHNpZGViYXJfYWNjb3JkaW9uX3BhbmVsIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5sZWZ0c2lkZWJhcl9hY2NvcmRpb25fcGFuZWwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xufVxuXG4uYnV0dG9uX3BhbmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjJyZW0gMDtcbn1cbi5idXR0b25fcGFuZWwgLmZsdXNoX3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJ1dHRvbl9wYW5lbCAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmJ1dHRvbl9wYW5lbCAuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbiAgbWFyZ2luOiAwIDAuMDVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uYnV0dG9uX3BhbmVsIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uX3BhbmVsIC50ZXh0X2J1dHRvbiwgLnRleHRfYnV0dG9uIHtcbiAgY29sb3I6ICMwMDAwZmY7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjJyZW07XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ1dHRvbl9wYW5lbCAudGV4dF9idXR0b246aG92ZXIsIC50ZXh0X2J1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbl9wYW5lbCAudGV4dF9idXR0b246YWN0aXZlLCAudGV4dF9idXR0b246YWN0aXZlIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbiNhdHRyaWJ1dGVfcHJvcGVydGllcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG59XG4jYXR0cmlidXRlX3Byb3BlcnRpZXMgLnByb3BlcnR5IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuI2F0dHJpYnV0ZV9wcm9wZXJ0aWVzIC5wcm9wZXJ0eSBzcGFuIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbn1cbiNhdHRyaWJ1dGVfcHJvcGVydGllcyAucHJvcGVydHkgc3BhbiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBtYXJnaW46IDA7XG59XG4jYXR0cmlidXRlX3Byb3BlcnRpZXMgLnByb3BlcnR5IHNwYW4gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiNhdHRyaWJ1dGVfcHJvcGVydGllcyAucHJvcGVydHkgc3BhbiBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbWFyZ2luOiAwO1xufVxuXG4jYXR0cmlidXRlX29wdGlvbnMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuI2F0dHJpYnV0ZV9vcHRpb25zIC5uZXdfb3B0aW9uX2lkX2VudHJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDAuMnJlbTtcbn1cbiNhdHRyaWJ1dGVfb3B0aW9ucyAubmV3X29wdGlvbl9pZF9lbnRyeSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jYXR0cmlidXRlX29wdGlvbnMgLnByb3BlcnR5IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuI2F0dHJpYnV0ZV9vcHRpb25zIC5wcm9wZXJ0eSBzcGFuIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMC4ycmVtIDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jYXR0cmlidXRlX29wdGlvbnMgLnByb3BlcnR5IHNwYW4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuI2F0dHJpYnV0ZV9vcHRpb25zIC5wcm9wZXJ0eSBzcGFuIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiNhdHRyaWJ1dGVfb3B0aW9ucyAucHJvcGVydHkgaW5wdXQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogOTQlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI2F0dHJpYnV0ZV9vcHRpb25zIC5wcm9wZXJ0eSBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuI3VzZXJfaW5wdXRfcGFuZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB6LWluZGV4OiAxMDAyO1xufVxuI3VzZXJfaW5wdXRfcGFuZWwgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xufVxuI3VzZXJfaW5wdXRfcGFuZWwgLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jdXNlcl9pbnB1dF9wYW5lbCAuY29udGVudCAudXNlcl9pbnB1dHMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4jdXNlcl9pbnB1dF9wYW5lbCAuY29udGVudCAudXNlcl9pbnB1dHMgLnJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbiN1c2VyX2lucHV0X3BhbmVsIC5jb250ZW50IC51c2VyX2lucHV0cyAuY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuI3VzZXJfaW5wdXRfcGFuZWwgLmNvbnRlbnQgLnVzZXJfY29uZmlybSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbiN1c2VyX2lucHV0X3BhbmVsIC5jb250ZW50IC51c2VyX2NvbmZpcm0gLm9rIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDQ4JTtcbn1cbiN1c2VyX2lucHV0X3BhbmVsIC5jb250ZW50IC51c2VyX2NvbmZpcm0gLmNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA0OCU7XG59XG4jdXNlcl9pbnB1dF9wYW5lbCAuY29udGVudCAud2FybmluZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNhbm5vdGF0aW9uX2VkaXRvcl9wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjY2NjY2NjO1xuICBwYWRkaW5nOiAwLjJlbSAxZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICB6LWluZGV4OiAxMDAxO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNjY2NjY2M7XG59XG5cbiNhbm5vdGF0aW9uX2VkaXRvciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNhbm5vdGF0aW9uX2VkaXRvciAucm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5oaWdobGlnaHQgLmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDAuNGVtIDAuNmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbiNhbm5vdGF0aW9uX2VkaXRvciAuY29sIGxhYmVsIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgdGV4dGFyZWEge1xuICBib3JkZXI6IDAuMWVtIHNvbGlkICNjY2NjY2M7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDAuMWVtIGRhc2hlZCAjY2NjY2NjO1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgaG9yaXpvbnRhbF9jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCAuaW1nX29wdGlvbnMge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCAuaW1nX29wdGlvbnMgLmltcm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCAuaW1nX29wdGlvbnMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjJyZW0gMC40cmVtO1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgLmltZ19vcHRpb25zIHNwYW4gaW1nIHtcbiAgaGVpZ2h0OiA0ZW07XG59XG4jYW5ub3RhdGlvbl9lZGl0b3IgLmNvbCAuaW1nX29wdGlvbnMgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgLmltZ19vcHRpb25zIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNhbm5vdGF0aW9uX2VkaXRvciAuY29sIC5pbWdfb3B0aW9ucyBpbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5jb2wgLmltZ19vcHRpb25zIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGJvcmRlcjogMC4xZW0gc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuI2Fubm90YXRpb25fZWRpdG9yIC5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNhbm5vdGF0aW9uX2VkaXRvciAuaWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Byb2plY3RfaW5mb19wYW5lbCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiNwcm9qZWN0X2luZm9fcGFuZWwgLnJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbiNwcm9qZWN0X2luZm9fcGFuZWwgLmNvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjFyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cbiNwcm9qZWN0X2luZm9fcGFuZWwgLmNvbCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jcHJvamVjdF9pbmZvX3BhbmVsIC5jb2wgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnVsLnJlZ2lvbl9zaGFwZSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC40ZW0gMDtcbiAgbWFyZ2luOiAwO1xufVxudWwucmVnaW9uX3NoYXBlIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMC4yZW07XG4gIGZpbGw6ICNmZmZmZmY7XG4gIHN0cm9rZTogIzAwMDAwMDtcbn1cbnVsLnJlZ2lvbl9zaGFwZSBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbDogI2ZmZmZmZjtcbiAgc3Ryb2tlOiAjZmYwMDAwO1xufVxudWwucmVnaW9uX3NoYXBlIC5zZWxlY3RlZCB7XG4gIGZpbGw6ICNmZmZmZmY7XG4gIHN0cm9rZTogI2ZmMDAwMDtcbn1cblxuI3JlZ2lvbl9pbmZvIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XG59XG5cbiNpbWdfZm5fbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xuICBtYXgtaGVpZ2h0OiAyNXJlbTtcbn1cbiNpbWdfZm5fbGlzdCB1bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiNpbWdfZm5fbGlzdCBsaSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDAuNHJlbTtcbn1cbiNpbWdfZm5fbGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWU1ZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNpbWdfZm5fbGlzdCAuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuI2ltZ19mbl9saXN0IC5zZWwge1xuICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2ltZ19mbl9saXN0IC5idWZmZXJlZCB7XG4gIGJvcmRlci1sZWZ0OiAwLjJyZW0gc29saWQgI2NjY2NjYztcbn1cblxuI21lc3NhZ2VfcGFuZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtZXNzYWdlX3BhbmVsIC5jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZjAwO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4udGV4dF9wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuLnRleHRfcGFuZWwgbGkge1xuICBtYXJnaW46IDFlbSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHRfcGFuZWwgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdmdfYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZ19zcGluYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDAuNGVtIHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMC40ZW0gc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDAuNGVtIHNvbGlkIGJsYWNrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5kaXNwbGF5X25vbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5X2Jsb2NrIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuI3NldHRpbmdzX3BhbmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogOTUlO1xufVxuI3NldHRpbmdzX3BhbmVsIGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuI3NldHRpbmdzX3BhbmVsIC5yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuI3NldHRpbmdzX3BhbmVsIC52YXJpYWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG59XG4jc2V0dGluZ3NfcGFuZWwgLnZhcmlhYmxlIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3NldHRpbmdzX3BhbmVsIC52YXJpYWJsZSAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nOiAwLjJyZW0gMHJlbTtcbn1cbiNzZXR0aW5nc19wYW5lbCAudmFsdWUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5uYXJyb3dfcGFnZV9jb250ZW50IHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5uYXJyb3dfcGFnZV9jb250ZW50IGxpIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMC40cmVtIDA7XG59XG5cbi5mb3JjZV9zbWFsbF9mb250IHtcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufVxuXG4ua2V5IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2YwZjBmMCwgI2ZjZmNmYyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn0iLCJcbiBib2R5IHtcblx0XHRtaW4td2lkdGg6IDIwMHB4O1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHR9XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG5cdG1hcmdpbjogMC42cmVtIDA7XG5cdHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG59XG5hIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxudGV4dGFyZWEge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuXHRtYXJnaW46IDAuNnJlbSAwO1xuXHRwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xufVxuLnRvcF9wYW5lbCB7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRkaXNwbGF5OiBibG9jaztcblx0YmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdHotaW5kZXg6IDEwMDE7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubWVudWJhciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAxLjhyZW07XG5cdGEge1xuXHRcdCY6bGluayB7XG5cdFx0XHRjb2xvcjogI2VlZWVlZTtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR9XG5cdFx0Jjp2aXNpdGVkIHtcblx0XHRcdGNvbG9yOiAjZWVlZWVlO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdH1cblx0fVxuXHR1bCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW46IDA7XG5cdH1cblx0bGkge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRwYWRkaW5nOiAwLjQ1cmVtIDFyZW07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuXHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdFx0dWwge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHR9XG5cdFx0dWwge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjNjE2MTYxO1xuXHRcdFx0bWluLXdpZHRoOiAxMHJlbTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHotaW5kZXg6IDEwMDtcblx0XHRcdG1hcmdpbjogMC40cmVtIC0xcmVtO1xuXHRcdFx0bGkge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiAjZWVlZWVlO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5zdWJtZW51X2RpdmlkZXIge1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwLjRyZW07XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQyNDI0Mjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLnRvb2xiYXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0bWFyZ2luLWxlZnQ6IDByZW07XG5cdHN2ZyB7XG5cdFx0ZmlsbDogd2hpdGU7XG5cdFx0bWFyZ2luOiAwLjJyZW0gMC4xcmVtO1xuXHRcdGhlaWdodDogMS4ycmVtO1xuXHRcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0XHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRmaWxsOiB5ZWxsb3c7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHRcdCY6YWN0aXZlIHtcblx0XHRcdGZpbGw6IHdoaXRlO1xuXHRcdH1cblx0fVxuXHR1bCB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0cGFkZGluZzogMC4xcmVtO1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0cGFkZGluZzogMHJlbSAwLjFyZW07XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0fVxufVxuLm1pZGRsZV9wYW5lbCB7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdHRhYmxlLWxheW91dDogZmxleDtcblx0d2lkdGg6IDEwMCU7XG5cdHotaW5kZXg6IDE7XG5cdHBhZGRpbmc6IDA7XG59XG4jbGVmdHNpZGViYXIge1xuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHR6LWluZGV4OiAxMDtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiNkaXNwbGF5X2FyZWEge1xuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHR3aWR0aDogMTAwJTtcblx0ei1pbmRleDogMTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nLWxlZnQ6IDFlbTtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcbn1cbiNpbWFnZV9wYW5lbCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0b3V0bGluZTogbm9uZTtcblx0aW1nIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0b3BhY2l0eTogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwcHg7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRvdXRsaW5lOiBub25lO1xuXHR9XG5cdGNhbnZhcyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMHB4O1xuXHRcdGxlZnQ6IDBweDtcblx0XHRvdXRsaW5lOiBub25lO1xuXHR9XG5cdC52aXNpYmxlIHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXHR9XG5cdGxhYmVsIHtcblx0XHQmID4gaW1nIHtcblx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRoZWlnaHQ6IDRlbTtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0fVxuXHR9XG59XG4jaW1hZ2VfZ3JpZF9wYW5lbCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0I2ltYWdlX2dyaWRfdG9vbGJhciB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiBzbWFsbDtcblx0XHRwYWRkaW5nOiAwLjVyZW0gMDtcblx0XHRzZWxlY3Qge1xuXHRcdFx0Zm9udC1zaXplOiBzbWFsbDtcblx0XHR9XG5cdFx0LnRvb2wge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0bWFyZ2luOiAwIDAuNXJlbTtcblx0XHR9XG5cdH1cblx0I2ltYWdlX2dyaWRfZ3JvdXBfcGFuZWwge1xuXHRcdGZvbnQtc2l6ZTogc21hbGw7XG5cdFx0c2VsZWN0IHtcblx0XHRcdGZvbnQtc2l6ZTogc21hbGw7XG5cdFx0fVxuXHRcdC5pbWFnZV9ncmlkX2dyb3VwX3Rvb2xiYXIge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDJyZW07XG5cdFx0XHRzZWxlY3Qge1xuXHRcdFx0XHRtYXJnaW46IDAgMC4ycmVtO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRmb250LXNpemU6IHNtYWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQjaW1hZ2VfZ3JpZF9uYXYge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRmb250LXNpemU6IHNtYWxsO1xuXHRcdHBhZGRpbmctbGVmdDogMC41cmVtO1xuXHRcdG1hcmdpbi10b3A6IDAuMnJlbTtcblx0XHRzcGFuIHtcblx0XHRcdG1hcmdpbjogMCAwLjJyZW07XG5cdFx0fVxuXHR9XG5cdCNpbWFnZV9ncmlkX2NvbnRlbnQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0I2ltYWdlX2dyaWRfY29udGVudF9pbWcge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0bWFyZ2luOiAwLjNlbTtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0Ym9yZGVyOiAwLjJlbSBzb2xpZCAjZmZmZmZmO1xuXHRcdFx0XHRvdXRsaW5lOiAwLjFlbSBzb2xpZCAjMDA2NmZmO1xuXHRcdFx0fVxuXHRcdFx0Lm5vdF9zZWwge1xuXHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCNpbWFnZV9ncmlkX2NvbnRlbnRfcnNoYXBlIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdH1cblx0XHRpbWcge1xuXHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG59XG4jbGVmdHNpZGViYXJfY29sbGFwc2VfcGFuZWwge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDEwO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuI2xlZnRzaWRlYmFyX3Nob3dfYnV0dG9uIHtcblx0Zm9udC1zaXplOiBsYXJnZTtcblx0bWFyZ2luLWxlZnQ6IDAuMXJlbTtcblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6IHJlZDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cbmJ1dHRvbiB7XG5cdCYubGVmdHNpZGViYXJfYWNjb3JkaW9uIHtcblx0XHRmb250LXNpemU6IGxhcmdlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0Jjpmb2N1cyB7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdH1cblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6ICdcXDAyNzk1Jztcblx0XHRcdGNvbG9yOiAjNGQ0ZDRkO1xuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdH1cblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogJ1xcMjc5Nic7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5idXR0b24ubGVmdHNpZGViYXJfYWNjb3JkaW9uLmFjdGl2ZSwgYnV0dG9uLmxlZnRzaWRlYmFyX2FjY29yZGlvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4ubGVmdHNpZGViYXJfYWNjb3JkaW9uX3BhbmVsIHtcblx0ZGlzcGxheTogbm9uZTsgLy9DaGFuZ2UgdGhpcyB0byB0b2dnbGUgQXR0cmlidXRlcyBzaWRlXG5cdHBhZGRpbmc6IDAgMC41ZW07XG5cdGZvbnQtc2l6ZTogc21hbGw7XG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMmYyZjI7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjJmMmYyO1xuXHQmLnNob3cge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdHRhYmxlIHtcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHR9XG5cdHRkIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuXHRcdHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG5cdH1cbn1cbi5idXR0b25fcGFuZWwge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IDAuMnJlbSAwO1xuXHQuZmx1c2hfcmlnaHQge1xuXHRcdGZsb2F0OiByaWdodDtcblx0fVxuXHQuYWN0aXZlIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdH1cblx0LmJ1dHRvbiB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xuXHRcdG1hcmdpbjogMCAwLjA1cmVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuXHRcdGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcblx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0fVxuXHR9XG59XG4uYnV0dG9uX3BhbmVsIC50ZXh0X2J1dHRvbiwgLnRleHRfYnV0dG9uIHtcblx0Y29sb3I6ICMwMDAwZmY7XG5cdHBhZGRpbmc6IDAuMnJlbSAwLjJyZW07XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5idXR0b25fcGFuZWwgLnRleHRfYnV0dG9uOmhvdmVyLCAudGV4dF9idXR0b246aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uX3BhbmVsIC50ZXh0X2J1dHRvbjphY3RpdmUsIC50ZXh0X2J1dHRvbjphY3RpdmUge1xuXHRjb2xvcjogIzAwMDAwMDtcbn1cbiNhdHRyaWJ1dGVfcHJvcGVydGllcyB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luOiAxcmVtIDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG5cdC5wcm9wZXJ0eSB7XG5cdFx0ZGlzcGxheTogdGFibGUtcm93O1xuXHRcdHNwYW4ge1xuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdHBhZGRpbmc6IDAuMnJlbSAwLjRyZW07XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZWxlY3Qge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuI2F0dHJpYnV0ZV9vcHRpb25zIHtcblx0ZGlzcGxheTogdGFibGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRtYXJnaW46IDFyZW0gMDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcblx0Lm5ld19vcHRpb25faWRfZW50cnkge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwYWRkaW5nOiAxcmVtIDAuMnJlbTtcblx0XHRpbnB1dCB7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRcdH1cblx0fVxuXHQucHJvcGVydHkge1xuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdztcblx0XHRzcGFuIHtcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0XHRwYWRkaW5nOiAwLjJyZW0gMC4ycmVtO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0XHRpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dFt0eXBlPXJhZGlvXSB7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlucHV0IHtcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0XHR3aWR0aDogOTQlO1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4jdXNlcl9pbnB1dF9wYW5lbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTogbm9uZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG5cdHotaW5kZXg6IDEwMDI7XG5cdC5jb250ZW50IHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRwYWRkaW5nOiAycmVtIDRyZW07XG5cdFx0LnRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogbGFyZ2U7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHR9XG5cdFx0LnVzZXJfaW5wdXRzIHtcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRcdFx0LnJvdyB7XG5cdFx0XHRcdGRpc3BsYXk6IHRhYmxlLXJvdztcblx0XHRcdH1cblx0XHRcdC5jZWxsIHtcblx0XHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdFx0cGFkZGluZzogMXJlbSAwLjVyZW07XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC51c2VyX2NvbmZpcm0ge1xuXHRcdFx0ZGlzcGxheTogdGFibGU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbjogMnJlbSAwO1xuXHRcdFx0Lm9rIHtcblx0XHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRcdFx0d2lkdGg6IDQ4JTtcblx0XHRcdH1cblx0XHRcdC5jYW5jZWwge1xuXHRcdFx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdFx0XHR3aWR0aDogNDglO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQud2FybmluZyB7XG5cdFx0XHRjb2xvcjogcmVkO1xuXHRcdH1cblx0fVxufVxuI2Fubm90YXRpb25fZWRpdG9yX3BhbmVsIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRkaXNwbGF5OiBub25lO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICNjY2NjY2M7XG5cdHBhZGRpbmc6IDAuMmVtIDFlbTtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdHotaW5kZXg6IDEwMDE7XG5cdGJveC1zaGFkb3c6IDAgMCAxZW0gI2NjY2NjYztcbn1cbiNhbm5vdGF0aW9uX2VkaXRvciB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRtYXJnaW4tYm90dG9tOiAzZW07XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0LnJvdyB7XG5cdFx0ZGlzcGxheTogdGFibGUtcm93O1xuXHR9XG5cdC5oaWdobGlnaHQge1xuXHRcdC5jb2wge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcblx0XHR9XG5cdH1cblx0LmNvbCB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHRwYWRkaW5nOiAwLjRlbSAwLjZlbTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0Zm9udC1zaXplOiBpbmhlcml0O1xuXHRcdGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0fVxuXHRcdGlucHV0W3R5cGU9cmFkaW9dIHtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0fVxuXHRcdGxhYmVsIHtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0fVxuXHRcdHRleHRhcmVhIHtcblx0XHRcdGJvcmRlcjogMC4xZW0gc29saWQgI2NjY2NjYztcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdGJvcmRlcjogMC4xZW0gZGFzaGVkICNjY2NjY2M7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4ge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdGhvcml6b250YWxfY29udGFpbmVyIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR9XG5cdFx0LmltZ19vcHRpb25zIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRcdC5pbXJvdyB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0bWFyZ2luOiAwLjJyZW0gMC40cmVtO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdGhlaWdodDogNGVtO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwIHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dFt0eXBlPXJhZGlvXSB7XG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRcdCYgKyBsYWJlbCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG5cdFx0XHRcdCYgKyBsYWJlbCB7XG5cdFx0XHRcdFx0Ym9yZGVyOiAwLjFlbSBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuXHRcdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblx0XHRcdFx0XHRmb250LXNpemU6IGluaGVyaXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmhlYWRlciB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblx0LmlkIHtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxufVxuI3Byb2plY3RfaW5mb19wYW5lbCB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRmb250LXNpemU6IDAuOHJlbTtcblx0LnJvdyB7XG5cdFx0ZGlzcGxheTogdGFibGUtcm93O1xuXHR9XG5cdC5jb2wge1xuXHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0cGFkZGluZzogMC40cmVtIDAuMXJlbTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0aW5wdXRbdHlwZT10ZXh0XSB7XG5cdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdGlucHV0IHtcblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG51bCB7XG5cdCYucmVnaW9uX3NoYXBlIHtcblx0XHRmb250LXNpemU6IHh4LWxhcmdlO1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHBhZGRpbmc6IDAuNGVtIDA7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGxpIHtcblx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0cGFkZGluZzogMCAwLjJlbTtcblx0XHRcdGZpbGw6ICNmZmZmZmY7XG5cdFx0XHRzdHJva2U6ICMwMDAwMDA7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRmaWxsOiAjZmZmZmZmO1xuXHRcdFx0XHRzdHJva2U6ICNmZjAwMDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5zZWxlY3RlZCB7XG5cdFx0XHRmaWxsOiAjZmZmZmZmO1xuXHRcdFx0c3Ryb2tlOiAjZmYwMDAwO1xuXHRcdH1cblx0fVxufVxuI3JlZ2lvbl9pbmZvIHtcblx0Zm9udC1zaXplOiAwLjhlbTtcblx0bWFyZ2luLWJvdHRvbTogMC40ZW07XG59XG4jaW1nX2ZuX2xpc3Qge1xuXHRkaXNwbGF5OiBub25lO1xuXHRmb250LXNpemU6IHNtYWxsO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHRtaW4taGVpZ2h0OiAxMHJlbTtcblx0bWF4LWhlaWdodDogMjVyZW07XG5cdHVsIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bGluZS1oZWlnaHQ6IDEuM2VtO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0fVxuXHRsaSB7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwYWRkaW5nOiAwIDAuNHJlbTtcblx0XHQmOmhvdmVyIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkNWU1ZmY7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHR9XG5cdC5lcnJvciB7XG5cdFx0Y29sb3I6IHJlZDtcblx0fVxuXHQuc2VsIHtcblx0XHRib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblx0LmJ1ZmZlcmVkIHtcblx0XHRib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkICNjY2NjY2M7XG5cdH1cbn1cbiNtZXNzYWdlX3BhbmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGJvdHRvbTogMHB4O1xuXHR6LWluZGV4OiA5OTk5O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC5jb250ZW50IHtcblx0XHRkaXNwbGF5OiBpbmxpbmU7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdFx0Y29sb3I6ICNmZmZmMDA7XG5cdFx0Zm9udC1zaXplOiBzbWFsbDtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0bGluZS1oZWlnaHQ6IDJyZW07XG5cdFx0cGFkZGluZzogMC41cmVtIDJyZW07XG5cdH1cbn1cbi50ZXh0X3BhbmVsIHtcblx0ZGlzcGxheTogbm9uZTtcblx0bWFyZ2luOiBhdXRvO1xuXHRmb250LXNpemU6IG1lZGl1bTtcblx0bGluZS1oZWlnaHQ6IDEuM2VtO1xuXHRtYXJnaW46IDA7XG5cdG1heC13aWR0aDogNzAwcHg7XG5cdGxpIHtcblx0XHRtYXJnaW46IDFlbSAwO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cblx0cCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuLnN2Z19idXR0b24ge1xuXHQmOmhvdmVyIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cbi5sb2FkaW5nX3NwaW5ib3gge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGJvcmRlcjogMC40ZW0gc29saWQgI2NjY2NjYztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3JkZXItdG9wOiAwLjRlbSBzb2xpZCBibGFjaztcblx0Ym9yZGVyLWJvdHRvbTogMC40ZW0gc29saWQgYmxhY2s7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcblx0YW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmRpc3BsYXlfbm9uZSB7XG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kaXNwbGF5X2Jsb2NrIHtcblx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbiNzZXR0aW5nc19wYW5lbCB7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0d2lkdGg6IDk1JTtcblx0YSB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcblx0fVxuXHQucm93IHtcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3c7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG5cdH1cblx0LnZhcmlhYmxlIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHRcdHdpZHRoOiA2MCU7XG5cdFx0cGFkZGluZzogMC41cmVtIDAuNXJlbTtcblx0XHRkaXYge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdC5uYW1lIHtcblx0XHR9XG5cdFx0LmRlc2Mge1xuXHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcblx0XHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdFx0cGFkZGluZzogMC4ycmVtIDByZW07XG5cdFx0fVxuXHR9XG5cdC52YWx1ZSB7XG5cdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdHBhZGRpbmctbGVmdDogMXJlbTtcblx0fVxufVxuLmRpc3BsYXlfYXJlYV9jb250ZW50IHtcbn1cbi5uYXJyb3dfcGFnZV9jb250ZW50IHtcblx0d2lkdGg6IDYwJTtcblx0bGkge1xuXHRcdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRcdG1hcmdpbjogMC40cmVtIDA7XG5cdH1cbn1cbi5mb3JjZV9zbWFsbF9mb250IHtcblx0Zm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufVxuLmtleSB7XG5cdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdHBhZGRpbmc6IDFweCA2cHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2YwZjBmMCwjZmNmY2ZjKTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0Y29sb3I6ICMzMDMwMzA7XG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRmb250LXNpemU6IDEuMmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/via/via.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/via/via.component.ts ***!
  \*************************************************/
/*! exports provided: ViaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViaComponent", function() { return ViaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/geo-data.service */ "./src/app/services/geo-data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/projects.service */ "./src/app/services/projects.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








// import * from '../../../assets/js/via.component.js';
// declare function _via_init(): any;
// declare function _via_update_ui_components(): any;
// <div[InnerHTML] = "viaComponent"></div>
let ViaComponent = class ViaComponent {
    //   @ContentChild('contentParagraph') paragraph: ElementRef
    constructor(geoDataService, projectsService, groupsService, renderer, spinner) {
        this.geoDataService = geoDataService;
        this.projectsService = projectsService;
        this.groupsService = groupsService;
        this.renderer = renderer;
        this.spinner = spinner;
        this.scrolling = false;
        this.featureList = [];
        this.scrollSum = 15;
    }
    ngOnInit() {
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        // this.activeFeatureNum = 0;
        // FIXME feature collection giving me an error when trying to access assets
        // this.geoDataService.features.subscribe( (fc: FeatureCollection) => {
        this.geoDataService.features.subscribe((fc) => {
            if (fc) {
                this.featureList = fc.features.filter(feature => {
                    return feature.assets[0].asset_type == "image";
                });
                if (this.scrollSum == 15) {
                    this.featureListScroll = this.featureList.slice(0, this.scrollSum);
                }
            }
        });
        this.geoDataService.activeFeature.subscribe((next) => {
            if (next) {
                this.activeFeature = next;
            }
        });
        this.groupsService.groups.subscribe((next) => {
            this.groupList = next;
        });
        this.groupsService.activeGroup.subscribe((next) => {
            this.activeGroup = next;
        });
        this.groupsService.tempGroup.subscribe((next) => {
            this.tempGroup = next;
        });
        this.groupsService.showGroup.subscribe((next) => {
            this.showGroup = next;
        });
        this.groupsService.activeFeatureNum.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0)).subscribe((next) => {
            this.activeFeatureNum = next;
        });
        this.groupsService.showSidebar.subscribe((next) => {
            this.showSidebar = next;
            // this.status = !this.status;
            if (next) {
                this.status = true;
            }
            else {
                this.status = false;
            }
        });
        this.groupsService.setActiveFeatureNum(0);
        // via.component.html
        _via_init();
    }
    onResized(event) {
        _via_update_ui_components();
    }
    getPath() {
        // let featureSource = this.environment.apiUrl + '/assets/' + this.activeFeature.assets[0].path;
        let activeGroupObj = this.groupList.filter(realGroup => realGroup.name === this.activeGroup);
        if (activeGroupObj[0] != undefined) {
            if (activeGroupObj[0].features[this.activeFeatureNum].assets[0].path == undefined) {
                this.groupsService.setActiveFeatureNum(0);
                // this.groupsService.setActiveFeatureNum(0);
                if (activeGroupObj[0].features[this.activeFeatureNum] == undefined) {
                    this.groupsService.setActiveGroup(this.groupList[0].name);
                }
            }
        }
        let featureSource = this.environment.apiUrl + '/assets/' + activeGroupObj[0].features[this.activeFeatureNum].assets[0].path;
        this.groupsService.setActiveFeatureId(activeGroupObj[0].features[this.activeFeatureNum].id);
        featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
        return featureSource;
    }
};
ViaComponent.ctorParameters = () => [
    { type: _services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"] },
    { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
ViaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-via',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./via.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/via/via.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./via.component.scss */ "./src/app/components/via/via.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_geo_data_service__WEBPACK_IMPORTED_MODULE_2__["GeoDataService"],
        _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"],
        _services_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], ViaComponent);



/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: Group, AssetFilters, Project, AuthToken, FeatureAsset, FeatureCollection, Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetFilters", function() { return AssetFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureAsset", function() { return FeatureAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollection", function() { return FeatureCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Group {
}
class AssetFilters {
    constructor() {
        // bbox has the following format: [sw_lng, sw_lat, ne_lng, ne_lat], the same as leaflet
        this.bbox = [];
        this.assetType = new Set();
    }
    updateAssetTypes(assetType) {
        this.assetType.has(assetType) ? this.assetType.delete(assetType) : this.assetType.add(assetType);
    }
    updateBBox(bbox) {
        this.bbox = bbox;
    }
    toJson() {
        return {
            assetType: [...this.assetType],
            bbox: this.bbox
        };
    }
}
class Project {
}
class AuthToken {
    /**
     *
     * @param token : String
     * @param expires: Date
     */
    constructor(token, expires) {
        this.token = token;
        this.expires = new Date(expires);
    }
    static fromExpiresIn(token, expires_in) {
        const expires = new Date(new Date().getTime() + expires_in * 1000);
        return new AuthToken(token, expires);
    }
    /**
     * Checks if the token is expired or not
     */
    isExpired() {
        return new Date().getTime() > this.expires.getTime();
    }
}
class FeatureAsset {
    // TODO: Implenent this
    get assetPath() {
        return '';
    }
}
class FeatureCollection {
}
class Feature {
    constructor(f) {
        this.geometry = f.geometry;
        this.properties = f.properties;
        this.id = f.id;
        this.type = f.type;
        this.assets = f.assets;
        this.styles = f.styles;
        this.project_id = f.project_id;
    }
    featureType() {
        if (this.assets &&
            this.assets.length === 1) {
            return this.assets[0].asset_type;
        }
        if (this.assets &&
            this.assets.length > 1) {
            return 'collection';
        }
        if (!this.assets.length) {
            return this.geometry.type;
        }
    }
}


/***/ }),

/***/ "./src/app/services/agave-systems.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/agave-systems.service.ts ***!
  \***************************************************/
/*! exports provided: AgaveSystemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgaveSystemsService", function() { return AgaveSystemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AgaveSystemsService = class AgaveSystemsService {
    constructor(tapis) {
        this.tapis = tapis;
        this.baseUrl = 'https://agave.designsafe-ci.org/systems/v2/';
        this._systems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.systems = this._systems.asObservable();
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.projects = this._projects.asObservable();
    }
    list() {
        this.tapis.systemsList({ type: 'STORAGE' })
            .subscribe(resp => {
            this._systems.next(resp.result);
            this._projects.next(resp.result.filter(sys => sys.id.startsWith('project')));
        }, error => {
            this._systems.next(null);
            this._projects.next(null);
        });
    }
};
AgaveSystemsService.ctorParameters = () => [
    { type: ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AgaveSystemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], AgaveSystemsService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticatedUser, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedUser", function() { return AuthenticatedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







class AuthenticatedUser {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.currentUser = this._currentUser.asObservable();
        this.LS_TOKEN_KEY = 'hazmapperToken';
        this.LS_USER_KEY = 'hazmapperUser';
    }
    login() {
        // First, check if the user has a token in localStorage
        const tokenStr = localStorage.getItem(this.LS_TOKEN_KEY);
        if (!tokenStr) {
            this.redirectToauthenticaor();
        }
        else {
            const token = JSON.parse(tokenStr);
            this.userToken = new _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"](token.token, new Date(token.expires));
            if (!this.userToken || this.userToken.isExpired()) {
                this.logout();
                this.redirectToauthenticaor();
            }
            this.getUserInfo();
        }
    }
    redirectToauthenticaor() {
        const client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].clientId;
        const callback = location.origin + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseHref + 'callback';
        const state = Math.random().toString(36);
        const AUTH_URL = `https://agave.designsafe-ci.org/authorize?scope=openid&client_id=${client_id}&response_type=token&redirect_uri=${callback}&state=${state}`;
        window.location.href = AUTH_URL;
    }
    /**
     * Checks to make sure that the user has a token and the token is not expired;
     */
    isLoggedIn() {
        return this.userToken && !this.userToken.isExpired();
    }
    logout() {
        this.userToken = null;
        localStorage.removeItem(this.LS_TOKEN_KEY);
        localStorage.removeItem(this.LS_USER_KEY);
    }
    setToken(token, expires) {
        this.userToken = _models_models__WEBPACK_IMPORTED_MODULE_3__["AuthToken"].fromExpiresIn(token, expires);
        localStorage.setItem(this.LS_TOKEN_KEY, JSON.stringify(this.userToken));
        // hit the wso2 api to retrieve the username etc
        this.router.navigate(['/']);
    }
    getUserInfo() {
        const INFO_URL = `https://agave.designsafe-ci.org/oauth2/userinfo?schema=openid`;
        const userStr = localStorage.getItem(this.LS_USER_KEY);
        const user = JSON.parse(userStr);
        if (user !== null) {
            this._currentUser.next(new AuthenticatedUser(user.username, user.email));
        }
        else {
            this.http.get(INFO_URL).subscribe(resp => {
                const u = new AuthenticatedUser(resp.name, resp.email);
                localStorage.setItem(this.LS_USER_KEY, JSON.stringify(u));
                this._currentUser.next(u);
            });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/forms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/forms.service.ts ***!
  \*******************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let FormsService = class FormsService {
    // THIS TODO
    // private _forms: BehaviorSubject<Group> = new BehaviorSubject<Group>({type: 'Group', formList: [], groupName: []});
    // public forms: Observable<Group> = this._forms.asObservable();
    constructor(groupsService) {
        this.groupsService = groupsService;
        // private _forms: BehaviorSubject<any[]> = new BehaviorSubject([]);
        // public forms: Observable<any[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group[]> = new BehaviorSubject([]);
        // public forms: Observable<Group[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group[]> = new BehaviorSubject([]);
        // public forms: Observable<Group[]> = this._forms.asObservable();
        // private _forms: BehaviorSubject<Group> = new BehaviorSubject([]);
        // private _forms: BehaviorSubject<Group> = new BehaviorSubject<Group>({Type});
        // this._features = new BehaviorSubject<FeatureCollection>({type: 'FeatureCollection', features: []});
        // this._features = new BehaviorSubject<FeatureCollection>({type: 'FeatureCollection', features: []});
        this._forms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.forms = this._forms.asObservable();
        this._activeFormList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.activeFormList = this._activeFormList.asObservable();
        this._formGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.formGroup = this._formGroup.asObservable();
    }
    // getProjects(): void {
    //  this.http.get<Project[]>(environment.apiUrl + `/projects/`).subscribe( resp => {
    //    this._projects.next(resp);
    //  });
    // }
    // addForm(formList: Array<any>): void {
    //	this._forms.formList.next(formList);
    // }
    // addForm(formObj: Group[]): void {
    // TODO This should be stored in projects api later on (or not)
    // addForm(groupName: string, formGroup: Group, formList: Array<any>): void {
    // addForm(formObj: Array<Group>): void {
    addForm(groupName, formItem) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => {
            return groupList.map(groupObj => {
                if (groupObj.groupName == groupName) {
                    groupObj.formList.push(formItem);
                }
                return groupObj;
            });
        })).subscribe(current => this._forms.next(current));
        this.changeGroupForm(groupName);
    }
    updateFormItem() {
        let group = {};
        this._activeFormList.value.forEach(e => group[e.label] = e.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](e.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
            : new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](e.value || ''));
        this._formGroup.next(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"](group));
    }
    changeGroupForm(groupName) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                return groupObj.formList;
            }
        }))).subscribe(current => { this._activeFormList.next(current.find(e => e != undefined)); });
        this.updateFormItem();
    }
    addGroup(groupName) {
        let groupObject = new _models_models__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        groupObject.formList = [];
        groupObject.groupName = groupName;
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(current => {
            current.push(groupObject);
            this._forms.next(current);
        });
    }
    deleteForm(groupName, form) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList = groupObj.formList.filter(formItem => formItem.label != form.label);
            }
            return groupObj;
        }))).subscribe(current => this._forms.next(current));
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                return groupObj.formList.filter(formItem => formItem.label != form.label);
            }
        }))).subscribe(current => { this._activeFormList.next(current.find(e => e != undefined)); });
        this.changeGroupForm(groupName);
    }
    ;
    renameForm(groupName, form, label) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.label = label;
                    }
                });
            }
            return groupObj;
        }))).subscribe(current => { this._forms.next(current); });
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.label = label;
                    }
                });
            }
            return groupObj.formList;
        }))).subscribe(current => { this._activeFormList.next(current.find(e => e != undefined)); });
        this.changeGroupForm(groupName);
    }
    renameOption(groupName, opt, form, label) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.options.forEach(option => {
                            if (option.label == opt.label) {
                                option.label = label;
                            }
                        });
                    }
                });
            }
            return groupObj;
        }))).subscribe(current => this._forms.next(current));
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.options.forEach(option => {
                            if (option.label == opt.label) {
                                option.label = label;
                            }
                        });
                    }
                });
                // return groupList;
            }
            return groupObj.formList;
        }))).subscribe(current => { this._activeFormList.next(current.find(e => e != undefined)); });
        // }))).subscribe(current => {console.log(current.find(e => e != undefined))});
        this.changeGroupForm(groupName);
    }
    deleteOption(groupName, opt, form) {
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.options = formItem.options.filter(option => option.label != opt.label);
                    }
                });
            }
            return groupObj;
        }))).subscribe(current => { this._forms.next(current); });
        this.forms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(groupList => groupList.map(groupObj => {
            if (groupObj.groupName == groupName) {
                groupObj.formList.forEach(formItem => {
                    if (formItem.label == form.label) {
                        formItem.options = formItem.options.filter(option => option.label != opt.label);
                    }
                });
            }
            return groupObj.formList;
        }))).subscribe(current => { this._activeFormList.next(current.find(e => e != undefined)); });
        this.changeGroupForm(groupName);
    }
    getForm(groupName, formObj) {
        let groupObj = formObj.filter(groupObj => groupObj.groupName === groupName);
        let finalArray = [];
        if (groupObj[0] != undefined) {
            finalArray = groupObj[0].formList;
        }
        return finalArray;
    }
};
FormsService.ctorParameters = () => [
    { type: _groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] }
];
FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]])
], FormsService);



/***/ }),

/***/ "./src/app/services/geo-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/geo-data.service.ts ***!
  \**********************************************/
/*! exports provided: GeoDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoDataService", function() { return GeoDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);









let GeoDataService = class GeoDataService {
    constructor(http) {
        this.http = http;
        this._pointClouds = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.pointClouds = this._pointClouds.asObservable();
        this._features = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ type: 'FeatureCollection', features: [] });
        this.features$ = this._features.asObservable();
        this._activeFeature = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._mapMouseLocation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        // For the style of the basemap, defaults to OpenStreetmap
        this._basemap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('roads');
        // Holds all of the overlays on a project
        this._overlays = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._activeOverlay = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getFeatures(projectId, query = new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"]()) {
        const qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/` + '?' + qstring)
            .subscribe((fc) => {
            fc.features = fc.features.map((feat) => new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat));
            this._features.next(fc);
        });
    }
    deleteFeature(feature) {
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${feature.project_id}/features/${feature.id}/`)
            .subscribe((resp) => {
            this.getFeatures(feature.project_id);
        });
    }
    getPointClouds(projectId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/point-cloud/`)
            .subscribe((resp) => {
            console.log(resp);
            this._pointClouds.next(resp);
        });
    }
    addFeature(feat) {
        this.features$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((current) => {
            current.features.push(feat);
            this._features.next(current);
        });
    }
    addPointCloud(projectId, title, conversionParams) {
        const payload = {
            description: title,
            conversion_parameters: conversionParams
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/point-cloud/`, payload)
            .subscribe((resp) => {
            this.getPointClouds(projectId);
        }, error => {
            // TODO: notification
        });
    }
    updateFeatureProperty(projectId, featureId, groupData) {
        // const payload = {
        //   description: title,
        //   conversion_parameters: conversionParams
        // };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/{projectId}/features/{featureId}/properties/`, groupData)
            .subscribe((resp) => {
            this.getFeatures(projectId);
        }, error => {
            // TODO: notification
        });
    }
    updateFeatureStyle(projectId, featureId, groupData) {
        // const payload = {
        //   description: title,
        //   conversion_parameters: conversionParams
        // };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/{projectId}/features/{featureId}/styles/`, groupData)
            .subscribe((resp) => {
            this.getFeatures(projectId);
        }, error => {
            // TODO: notification
        });
    }
    deletePointCloud(pc) {
        console.log(pc);
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${pc.project_id}/point-cloud/${pc.id}/`)
            .subscribe((resp) => {
            this.getPointClouds(pc.project_id);
        });
    }
    addFileToPointCloud(pc, file) {
        const form = new FormData();
        form.append('file', file);
        console.log(pc);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${pc.project_id}/point-cloud/${pc.id}/`, form)
            .subscribe((resp) => {
            console.log(resp);
        });
    }
    importFileFromTapis(projectId, files) {
        const tmp = files.map(f => ({ system: f.system, path: f.path }));
        const payload = {
            files: tmp
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/files/import/`, payload)
            .subscribe((resp) => {
        }, error => {
            // TODO: Add notification / toast
        });
    }
    downloadGeoJSON(projectId, query = new _models_models__WEBPACK_IMPORTED_MODULE_4__["AssetFilters"]()) {
        const qstring = querystring__WEBPACK_IMPORTED_MODULE_7__["stringify"](query.toJson());
        const downloadLink = document.createElement('a');
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/` + '?' + qstring)
            .subscribe((resp) => {
            const blob = new Blob([JSON.stringify(resp)], { type: 'application/json' });
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.setAttribute('download', 'hazmapper.json');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }
    uploadFile(projectId, file) {
        const form = new FormData();
        form.append('file', file, file.name);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/features/files/`, form)
            .subscribe((feats) => {
            feats.forEach((feat) => {
                this.addFeature(new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feat));
            });
        }, error => {
            // TODO: Add notification
        });
    }
    uploadAssetFile(projectId, featureId, file) {
        const form = new FormData();
        form.append('file', file, file.name);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/api/projects/${projectId}/features/${featureId}/assets/`, form)
            .subscribe((feature) => {
            // TODO workaround to update activeFeature
            let f = this._activeFeature.getValue();
            if (f && f.id === featureId) {
                this.activeFeature = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Feature"](feature);
                this.getFeatures(projectId);
            }
        }, error => {
            // TODO: Add notification
        });
    }
    getOverlays(projectId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/overlays/`).subscribe((ovs) => {
            this._overlays.next(ovs);
        });
    }
    addOverlay(projectId, file, label, minLat, maxLat, minLon, maxLon) {
        const payload = new FormData();
        payload.append('file', file);
        payload.append('label', label);
        payload.append('minLat', minLat.toFixed(6));
        payload.append('maxLat', maxLat.toFixed(6));
        payload.append('minLon', minLon.toFixed(6));
        payload.append('maxLon', maxLon.toFixed(6));
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/${projectId}/overlays/`, payload)
            .subscribe((resp) => {
            this.getOverlays(projectId);
        });
    }
    get overlays() {
        return this._overlays.asObservable();
    }
    get features() {
        return this._features.asObservable();
    }
    get activeFeature() {
        return this._activeFeature.asObservable();
    }
    // TODO: This is heinous
    set activeFeature(f) {
        if (f) {
            if (f === this._activeFeature.getValue()) {
                this._activeFeature.next(null);
            }
            else {
                this._activeFeature.next(f);
            }
        }
        else {
            this._activeFeature.next(null);
        }
    }
    get activeOverlay() {
        return this._activeOverlay.asObservable();
    }
    set activeOverlay(ov) {
        this._activeOverlay.next(ov);
    }
    get mapMouseLocation() {
        return this._mapMouseLocation.asObservable();
    }
    set mapMouseLocation(loc) {
        this._mapMouseLocation.next(loc);
    }
    set basemap(bmap) {
        this._basemap.next(bmap);
    }
    get basemap() {
        return this._basemap.asObservable();
    }
};
GeoDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeoDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeoDataService);



/***/ }),

/***/ "./src/app/services/groups.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/groups.service.ts ***!
  \********************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "./src/app/services/projects.service.ts");




// Will inject Projects and GeoData Service to get properties of Feature
let GroupsService = class GroupsService {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this._groups = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.groups = this._groups.asObservable();
        this._forms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.forms = this._forms.asObservable();
        this._tempGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.tempGroup = this._tempGroup.asObservable();
        this._showGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showGroup = this._showGroup.asObservable();
        this._showSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.showSidebar = this._showSidebar.asObservable();
        this._activeFeature = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeature = this._activeFeature.asObservable();
        this._activeGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeGroup = this._activeGroup.asObservable();
        this._activeFeatureNum = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeatureNum = this._activeFeatureNum.asObservable();
        this._unselectAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.unselectAll = this._unselectAll.asObservable();
        this._activeFeatureId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeFeatureId = this._activeFeatureId.asObservable();
        this._activePane = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activePane = this._activePane.asObservable();
        this._tagFeatureGroup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tagFeatureGroup = this._tagFeatureGroup.asObservable();
    }
    // Loop through projects to get a list of Groups
    addGroup(groupList) {
        this._groups.next(groupList);
    }
    addForm(formList) {
        this._forms.next(formList);
    }
    addTempGroup(tempGroup) {
        this._tempGroup.next(tempGroup);
    }
    setShowGroup(show) {
        this._showGroup.next(show);
    }
    setShowSidebar(show) {
        this._showSidebar.next(show);
    }
    setUnselectAll(select) {
        this._unselectAll.next(select);
    }
    // TODO Replace this with geo-data.service
    setActiveProject(feat) {
        // console.log(feat.assets[0].path);
        this._activeFeature.next(feat);
    }
    setActiveGroup(groupName) {
        // console.log(feat.assets[0].path);
        this._activeGroup.next(groupName);
    }
    setActivePane(pane) {
        // console.log(feat.assets[0].path);
        this._activePane.next(pane);
    }
    setActiveFeatureNum(num) {
        this._activeFeatureNum.next(num);
    }
    setActiveFeatureId(id) {
        this._activeFeatureId.next(id);
    }
    setTagFeatureGroup(groupName, featureId, payload) {
        let groupFeature = groupName + featureId;
        let tagFeatureGroupValue = this._tagFeatureGroup.value;
        if (tagFeatureGroupValue == null) {
            tagFeatureGroupValue = {};
        }
        else {
            tagFeatureGroupValue[groupFeature] = payload;
        }
        this._tagFeatureGroup.next(tagFeatureGroupValue);
    }
};
GroupsService.ctorParameters = () => [
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
];
GroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
], GroupsService);



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let ProjectsService = class ProjectsService {
    constructor(http) {
        this.http = http;
        this._projects = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.projects = this._projects.asObservable();
        this._activeProject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.activeProject = this._activeProject.asObservable();
    }
    getProjects() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/`).subscribe(resp => {
            this._projects.next(resp);
        });
    }
    create(data) {
        const prom = this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + `/projects/`, data);
        prom.subscribe(proj => {
            const p = new _models_models__WEBPACK_IMPORTED_MODULE_4__["Project"]();
            p.name = 'test';
            p.description = 'test';
            // Spread operator, just pushes the new project into the array
            this._projects.next([...this._projects.value, proj]);
            // Set the active project to the one just created?
            this._activeProject.next(proj);
        });
        return prom;
    }
    setActiveProject(proj) {
        this._activeProject.next(proj);
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProjectsService);



/***/ }),

/***/ "./src/app/services/tapis-files.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tapis-files.service.ts ***!
  \*************************************************/
/*! exports provided: TapisFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapisFilesService", function() { return TapisFilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_tapis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-tapis */ "./node_modules/ng-tapis/fesm2015/ng-tapis.js");




let TapisFilesService = class TapisFilesService {
    constructor(tapis) {
        this.tapis = tapis;
        this.baseUrl = 'https://agave.designsafe-ci.org/files/v2/';
        this._listing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.listing = this._listing.asObservable();
        this.IMPORTABLE_TYPES = ['jpg', 'las', 'laz', 'json', 'geojson', 'geotiff', 'tiff', 'gpx'];
    }
    checkIfSelectable(file) {
        if (file.type === 'dir') {
            return false;
        }
        const ext = this.getFileExtension(file);
        return this.IMPORTABLE_TYPES.includes(ext);
    }
    getFileExtension(file) {
        return file.name.split('.').pop();
    }
    listFiles(system, path) {
        this.tapis.filesList({ systemId: system, filePath: path })
            .subscribe(resp => {
            const files = resp.result;
            // This removes the first item in the listing, which in Agave is always a reference to self.
            const current = files.shift();
            current.path = this.getParentPath(current.path);
            current.name = '..';
            files.unshift(current);
            this._listing.next(files);
        });
    }
    getParentPath(path) {
        const cleaned = path.replace('//', '/');
        const arr = cleaned.split('/');
        arr.pop();
        const parentPath = arr.join('/');
        return parentPath;
    }
};
TapisFilesService.ctorParameters = () => [
    { type: ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
TapisFilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_tapis__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], TapisFilesService);



/***/ }),

/***/ "./src/app/utils/leafletUtils.ts":
/*!***************************************!*\
  !*** ./src/app/utils/leafletUtils.ts ***!
  \***************************************/
/*! exports provided: createMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);


function createCircleMarker(feature, latlng) {
    let options = {
        radius: 8,
        fillColor: "#d3d3d3",
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["circleMarker"])(latlng, options);
}
function createImageMarker(feature, latlng) {
    let divHtml = "<i class='fas fa-camera-retro fa-2x light-blue'></i>";
    let ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'leaflet-fa-marker-icon', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createCollectionMarker(feature, latlng) {
    let divHtml = '<i class="fa fa-folder-open fa-2x light-blue"></i>';
    let ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'icon-marker', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createVideoMarker(feature, latlng) {
    let divHtml = "<i class='fas fa-video fa-2x light-blue'></i>";
    let ico = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({ className: 'leaflet-fa-marker-icon', html: divHtml });
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"])(latlng, { icon: ico });
}
function createMarker(feature, latlng) {
    let marker;
    if (feature.featureType() == 'image') {
        marker = createImageMarker(feature, latlng);
    }
    else if (feature.featureType() == 'collection') {
        marker = createCollectionMarker(feature, latlng);
    }
    else if (feature.featureType() == 'video') {
        marker = createVideoMarker(feature, latlng);
    }
    else {
        marker = createCircleMarker(feature, latlng);
    }
    return marker;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://agave.designsafe-ci.org/geo/v2/',
    clientId: 'vtDnU5adn3ue7MMNPTq__bvxSa8a',
    baseHref: '/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/quenny/Desktop/taggit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);