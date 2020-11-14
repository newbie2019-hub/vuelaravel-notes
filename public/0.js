(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.checkToken();

              _this.getNotes();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      user: {
        id: localStorage.getItem('userid'),
        name: localStorage.getItem('username')
      },
      data: {
        noteid: "",
        title: "",
        note: "",
        id: localStorage.getItem('userid')
      },
      notes: [],
      modal: {
        title: "",
        content: ""
      },
      deleteid: "",
      archiveid: '',
      status: "save",
      isLoading: false,
      isAddNote: false,
      isArchived: false,
      total: 3
    };
  },
  methods: {
    checkToken: function checkToken() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.callApi('post', "api/auth/me?token=".concat(_this2.$store.state.token));

              case 2:
                res = _context2.sent;

                if (res.status == 201) {
                  localStorage.removeItem('auth');
                  localStorage.setItem('auth', res.data.newToken);
                  console.log(res.data.newToken);

                  _this2.$router.go();
                } else if (res.status !== 200) {
                  _this2.$router.push('/');
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveNote: function saveNote() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.status == "save")) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 3;
                return _this3.callApi("post", "api/note/store?token=".concat(_this3.$store.state.token), _this3.data);

              case 3:
                res = _context3.sent;

                if (res.status == 200) {
                  _this3.success("Note Created Successfully!");

                  _this3.data.title = "";
                  _this3.data.note = "";
                  _this3.isAddNote = false;

                  _this3.getNotes();
                }

                _context3.next = 14;
                break;

              case 7:
                if (!(_this3.status == "edit")) {
                  _context3.next = 14;
                  break;
                }

                _this3.isLoading = true;
                _context3.next = 11;
                return _this3.callApi("put", "api/note/put?token=".concat(_this3.$store.state.token), _this3.data);

              case 11:
                _res = _context3.sent;

                if (_res.status == 200) {
                  _this3.success("Note Updated successfully!");

                  _this3.data.noteid = "";
                  _this3.data.note = "";
                  _this3.data.title = "";
                  _this3.status = "save";
                  _this3.isLoading = false;

                  _this3.getNotes();
                }

                _this3.isLoading = false;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getNotes: function getNotes() {
      var _arguments = arguments,
          _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context4.next = 3;
                return _this4.callApi("get", "api/note/get?token=".concat(_this4.$store.state.token, "&&page=").concat(page, "&&total=").concat(_this4.total));

              case 3:
                res = _context4.sent;

                if (res.status == 200) {
                  _this4.notes = res.data;
                  _this4.isArchived = false;
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    showNote: function showNote(note) {
      this.modal.title = note.title;
      this.modal.content = note.content;
      $("#noteModal").modal("show");
    },
    showDeleteModal: function showDeleteModal(note) {
      this.deleteid = note.id;
      $("#deleteModal").modal("show");
    },
    deleteNote: function deleteNote() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.callApi("delete", "api/note/delete?token=".concat(_this5.$store.state.token, "&&id=").concat(_this5.deleteid));

              case 2:
                res = _context5.sent;

                if (res.status == 200) {
                  _this5.success("Note was deleted successfully");

                  $("#deleteModal").modal("hide");

                  _this5.getNotes();
                } else {
                  _this5.warning("Something went wrong");

                  $("#deleteModal").modal("hide");
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    showAddModal: function showAddModal() {},
    editNote: function editNote(note) {
      this.data.noteid = note.id;
      this.data.note = note.content;
      this.data.title = note.title;
      this.status = "edit";
    },
    editMobileNote: function editMobileNote(note) {
      this.data.noteid = note.id;
      this.data.note = note.content;
      this.data.title = note.title;
      this.isAddNote = true;
      this.status = "edit";
    },
    cancelEdit: function cancelEdit() {
      this.data.noteid = "";
      this.data.note = "";
      this.data.title = "";
      this.status = "save";
      this.isAddNote = false;
    },
    getArchived: function getArchived() {
      var _arguments2 = arguments,
          _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                page = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 1;
                _this6.isArchived = true;
                _this6.data.noteid = "";
                _this6.data.note = "";
                _this6.data.title = "";
                _this6.status = "save";
                _this6.isAddNote = false;
                _context6.next = 9;
                return _this6.callApi('get', "api/note/getArchived?token=".concat(_this6.$store.state.token, "&&page=").concat(page, "&&total=").concat(_this6.total));

              case 9:
                res = _context6.sent;

                if (res.status == 200) {
                  _this6.notes = res.data;
                }

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    archiveNote: function archiveNote() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.callApi('put', "api/note/addArchived?token=".concat(_this7.$store.state.token, "&&id=").concat(_this7.archiveid));

              case 2:
                res = _context7.sent;

                if (res.status == 200) {
                  _this7.notes = res.data;

                  _this7.getNotes();

                  $('#archiveModal').modal('hide');

                  _this7.success("Note moved to archived");
                }

                _this7.archiveid = '';

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    unarchiveNote: function unarchiveNote() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this8.callApi('put', "api/note/unarchive?token=".concat(_this8.$store.state.token, "&&id=").concat(_this8.archiveid));

              case 2:
                res = _context8.sent;

                if (res.status == 200) {
                  $('#unarchiveModal').modal('hide');

                  _this8.success("Note status changed to unarchived");

                  _this8.getArchived();
                }

                _this8.archiveid = '';

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    setArchiveID: function setArchiveID(note) {
      this.archiveid = note.id;
      $('#archiveModal').modal('show');
    },
    removeArchived: function removeArchived(note) {
      this.archiveid = note.id;
      $('#unarchiveModal').modal('show');
    },
    totalChange: function totalChange(event) {
      this.total = event.target.value;

      if (!this.isArchived) {
        this.getNotes();
      } else {
        this.getArchived();
      }
    },
    logout: function logout() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this9.callApi('post', 'api/auth/logout', {
                  token: _this9.$store.state.token
                });

              case 2:
                res = _context9.sent;

                if (res.status == 200) {
                  _this9.$store.commit('clearToken');

                  localStorage.removeItem('username');
                  localStorage.removeItem('userid');

                  _this9.$router.push('/');
                }

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-login {\r\n  background: rgba(74, 71, 250);\r\n  color: white;\n}\n.btn-login:hover {\r\n  color: rgb(15, 228, 228);\r\n  background: rgb(84, 82, 245);\n}\n.form-control {\r\n  border: 1px solid rgba(74, 71, 250) !important;\n}\n.page-item.active .page-link {\r\n  z-index: 3;\r\n  color: #fff;\r\n  background-color: rgba(74, 71, 250) !important;\r\n  border-color: rgb(84, 81, 241) !important;\n}\n.element-container {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n\r\n  width: 80%;\n}\n.archive {\r\n  position: absolute;\r\n  margin-top: -6%;\r\n  right: 0;\r\n  margin-right: 40%;\r\n  cursor: pointer;\n}\n.page-item.active .page-link {\r\n  color: #fff !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container", staticStyle: { height: "100vh" } },
    [
      _c("div", { staticClass: "row h-100 justify-content-center" }, [
        _c(
          "div",
          { staticClass: "col-9 col-sm-10 col-md-6 col-lg-6 mt-5" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("h4", { staticClass: "text-muted mr-3" }, [
                _vm._v("Welcome back, " + _vm._s(_vm.user.name) + "!")
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.logout($event)
                    }
                  }
                },
                [_vm._v("Logout")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("h6", { staticClass: "mr-4" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.getNotes($event)
                      }
                    }
                  },
                  [_vm._v("Notes")]
                )
              ]),
              _vm._v(" "),
              _c("h6", { staticClass: "mr-4" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.getArchived($event)
                      }
                    }
                  },
                  [_vm._v("Archive")]
                )
              ]),
              _vm._v(" "),
              _c("h6", { staticClass: "add-btn" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.isAddNote = !_vm.isAddNote
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.isAddNote ? "View Notes" : "Add Note"))]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.notes.data.length == 0
              ? _c("div", { staticClass: "row mt-3" }, [
                  _c("h5", [_vm._v("It appears you dont have any note yet!")])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isAddNote
              ? _c("div", { staticClass: "row mt-3" }, [
                  _c("h5", { staticClass: "text-muted" }, [
                    _vm._v("Want to add a Note?")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.title,
                        expression: "data.title"
                      }
                    ],
                    staticClass: "form-control mt-2",
                    attrs: {
                      type: "text",
                      id: "fullname",
                      placeholder: "Enter your title"
                    },
                    domProps: { value: _vm.data.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.note,
                        expression: "data.note"
                      }
                    ],
                    staticClass: "form-control mt-2",
                    attrs: {
                      placeholder: "Enter your notes.",
                      id: "exampleFormControlTextarea1",
                      rows: "7"
                    },
                    domProps: { value: _vm.data.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data, "note", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mr-2 mb-4" }, [
                    _vm.status == "edit"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-login btn-sm mt-4 mr-1",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.cancelEdit($event)
                              }
                            }
                          },
                          [_vm._v("\n              Cancel\n            ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-login mt-4",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.saveNote($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.status == "save"
                                ? _vm.isLoading
                                  ? "Saving ..."
                                  : "Save"
                                : _vm.isLoading
                                ? "Updating ..."
                                : "Update"
                            ) +
                            "\n          "
                        )
                      ]
                    )
                  ])
                ])
              : _vm._l(_vm.notes.data, function(note, i) {
                  return _c("div", { key: i, staticClass: "row mt-3" }, [
                    _c("div", [
                      _c("h5", { staticClass: "p-0 m-0" }, [
                        _vm._v(_vm._s(note.title))
                      ]),
                      _vm._v(" "),
                      _c("h6", { staticClass: "p-0 m-0 text-muted" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm._f("formatDate")(note.created_at)) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.isArchived
                        ? _c("div", { staticClass: "archive" }, [
                            _c(
                              "a",
                              {
                                attrs: { href: "" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.setArchiveID(note)
                                  }
                                }
                              },
                              [_vm._v("Archive")]
                            )
                          ])
                        : _c("div", { staticClass: "archive" }, [
                            _c(
                              "a",
                              {
                                attrs: { href: "" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.removeArchived(note)
                                  }
                                }
                              },
                              [_vm._v("Unarchive")]
                            )
                          ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row ml-1 p-0 m-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-login mt-3 mr-1",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showNote(note)
                              }
                            }
                          },
                          [_vm._v("\n              View\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-login mt-3 mr-1 desktop-edit",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editNote(note)
                              }
                            }
                          },
                          [_vm._v("\n              Edit\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-login mt-3 mr-1 mobile-edit",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editMobileNote(note)
                              }
                            }
                          },
                          [_vm._v("\n              Edit\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-login mt-3 mr-1",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showDeleteModal(note)
                              }
                            }
                          },
                          [_vm._v("\n              Delete\n            ")]
                        )
                      ])
                    ])
                  ])
                }),
            _vm._v(" "),
            !_vm.isAddNote
              ? _c(
                  "div",
                  { staticClass: "col-12 col-sm-10 col-md-10 col-lg-8" },
                  [
                    _c(
                      "div",
                      { staticClass: "row justify-content-end mt-2 mb-4" },
                      [
                        _c("p", { staticClass: "mr-2 mt-1" }, [
                          _vm._v("Total ")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group mr-2" }, [
                          _c(
                            "select",
                            {
                              staticClass: "custom-select ",
                              attrs: { id: "customSelect" },
                              on: {
                                change: function($event) {
                                  return _vm.totalChange($event)
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { selected: "" } }, [
                                _vm._v("3")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "5" } }, [
                                _vm._v("5")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "8" } }, [
                                _vm._v("8")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "10" } }, [
                                _vm._v("10")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("pagination", {
                          attrs: { data: _vm.notes },
                          on: { "pagination-change-page": _vm.getNotes }
                        })
                      ],
                      1
                    )
                  ]
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-9 col-sm-10 col-md-6 col-lg-6" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "element-container" }, [
              _c("h5", { staticClass: "mt-5 text-muted" }, [
                _vm._v("Want to add a Note?")
              ]),
              _vm._v(" "),
              _c("h6", { staticClass: "text-muted" }, [
                _vm._v("Enter your note here.")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.title,
                    expression: "data.title"
                  }
                ],
                staticClass: "form-control mt-4",
                attrs: {
                  type: "text",
                  id: "fullname",
                  placeholder: "Enter your title"
                },
                domProps: { value: _vm.data.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "title", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.data.note,
                    expression: "data.note"
                  }
                ],
                staticClass: "form-control mt-2",
                attrs: {
                  placeholder: "Enter your notes.",
                  id: "exampleFormControlTextarea1",
                  rows: "7"
                },
                domProps: { value: _vm.data.note },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.data, "note", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-end mr-2" }, [
                _vm.status == "edit"
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-login mt-4 mr-1",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.cancelEdit($event)
                          }
                        }
                      },
                      [_vm._v("\n              Cancel\n            ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-login mt-4",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveNote($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.status == "save"
                            ? _vm.isLoading
                              ? "Saving ..."
                              : "Save"
                            : _vm.isLoading
                            ? "Updating ..."
                            : "Update"
                        ) +
                        "\n            "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "noteModal",
            tabindex: "-1",
            "aria-labelledby": "staticBackdropLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-dialog-scrollable" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "staticBackdropLabel" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.modal.title) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v(
                  "\n          " + _vm._s(_vm.modal.content) + "\n        "
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "deleteModal",
            tabindex: "-1",
            "aria-labelledby": "staticBackdropLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-dialog-scrollable" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v(
                  "\n          Are you sure you want to delete this note?\n        "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("\n            Close\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.deleteNote($event)
                      }
                    }
                  },
                  [_vm._v("\n            Delete\n          ")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "archiveModal",
            tabindex: "-1",
            "aria-labelledby": "staticBackdropLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-dialog-scrollable" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v(
                  "\n          Are you sure you want to move this note to archived?\n        "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("\n            Close\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.archiveNote($event)
                      }
                    }
                  },
                  [_vm._v("\n            Yes\n          ")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "unarchiveModal",
            tabindex: "-1",
            "aria-labelledby": "staticBackdropLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-dialog-scrollable" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v(
                  "\n          Are you sure you want to unarchive this note?\n        "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("\n            Close\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.unarchiveNote($event)
                      }
                    }
                  },
                  [_vm._v("\n            Yes\n          ")]
                )
              ])
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("img", {
        staticClass: "img-fluid mt-1 mr-2",
        attrs: { src: "/images/icon.png", width: "50" }
      }),
      _vm._v(" "),
      _c("h3", { staticClass: "mt-3" }, [_vm._v("Welcome to your Notes.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "staticBackdropLabel" } },
        [_vm._v("Confirm Delete")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "staticBackdropLabel" } },
        [_vm._v("Confirm Note")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "staticBackdropLabel" } },
        [_vm._v("Confirm Note")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);