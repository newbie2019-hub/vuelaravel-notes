<template>
  <div>
    <div class="loader" v-if="isLoading">
      <div class="loader-container" v-if="isLoading">
        <bounce-loader :loading="isLoading" :color="'rgba(74, 71, 250)'" :size="'15px'"></bounce-loader> 
      </div>
    </div>
    <div class="container" style="height: 100vh">
      <div class="row h-100 justify-content-center">
        <div class="col-9 col-sm-10 col-md-6 col-lg-6 mt-5">
          <div class="row">
            <img
              src="/images/icon.png"
              class="img-fluid mt-1 mr-2"
              width="50"
              style=""
            />
            <h3 class="mt-3">Welcome to your Notes.</h3>
          </div>
          <div class="row mt-4">
            <h4 class="text-muted mr-3">Welcome back, {{ user.name }}!</h4>
            <a class="" href="" @click.prevent="logout">Logout</a>
          </div>
          <div class="row mt-4">
            <h6 class="mr-4"><a href="" @click.prevent="getNotes">Notes</a></h6>
            <h6 class="mr-4">
              <a href="" :class="isArchived ? 'text-muted' : ''" @click.prevent="getArchived">Archive</a>
            </h6>
            <h6 class="add-btn">
              <a @click.prevent="isAddNote = !isAddNote" href="">{{
                isAddNote ? "View Notes" : "Add Note"
              }}</a>
            </h6>
          </div>
          <div class="row mt-3" v-if="notes.data.length == 0">
            <h5>It appears you dont have any note yet!</h5>
          </div>

          <!--ADD NOTE--->
          <!--- MOBILE--->
          <div class="row mt-3" v-if="isAddNote">
            <h5 class="text-muted">Want to add a Note?</h5>
            <input
              type="text"
              class="form-control mt-2"
              id="fullname"
              v-model="data.title"
              placeholder="Enter your title"
            />
            <textarea
              class="form-control mt-2"
              placeholder="Enter your notes."
              id="exampleFormControlTextarea1"
              v-model="data.note"
              rows="7"
            ></textarea>
            <div class="mr-2 mb-4">
              <button
                class="btn btn-login btn-sm mt-4 mr-1"
                @click.prevent="cancelEdit"
                v-if="status == 'edit'"
              >
                Cancel
              </button>
              <button
                class="btn btn-sm btn-login mt-4"
                @click.prevent="saveNote"
              >
                {{
                  status == "save"
                    ? isLoading
                      ? "Saving ..."
                      : "Save"
                    : isLoading
                    ? "Updating ..."
                    : "Update"
                }}
              </button>
            </div>
          </div>

          <!-- NOTES DATA-->
          <div class="row mt-3" v-for="(note, i) in notes.data" :key="i" v-else>
            <div>
              <h5 class="p-0 m-0">{{ note.title }}</h5>
              <h6 class="p-0 m-0 text-muted">
                {{ note.created_at | formatDate }}
              </h6>
              <div class="archive" v-if="!isArchived">
                <a href="" @click.prevent="setArchiveID(note)">Archive</a>
              </div>
              <div class="archive" v-else>
                <a href="" @click.prevent="removeArchived(note)">Unarchive</a>
              </div>
              <div class="row ml-1 p-0 m-0">
                <button
                  class="btn btn-sm btn-login mt-3 mr-1"
                  @click.prevent="showNote(note)"
                >
                  View
                </button>
                <button
                  class="btn btn-sm btn-login mt-3 mr-1 desktop-edit"
                  @click.prevent="editNote(note)"
                >
                  Edit
                </button>
                <button
                  class="btn btn-sm btn-login mt-3 mr-1 mobile-edit"
                  @click.prevent="editMobileNote(note)"
                >
                  Edit
                </button>
                <button
                  class="btn btn-sm btn-login mt-3 mr-1"
                  @click.prevent="showDeleteModal(note)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-10 col-md-10 col-lg-8" v-if="!isAddNote">
            <div class="row justify-content-end mt-2 mb-4">
              <p class="mr-2 mt-1">Total</p>
              <div class="form-group mr-2">
                <select
                  id="customSelect"
                  @change="totalChange($event)"
                  class="custom-select"
                >
                  <option selected>3</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
              <pagination
                :data="notes"
                @pagination-change-page="getNotes"
              ></pagination>
            </div>
          </div>
        </div>
        <div class="col-9 col-sm-10 col-md-6 col-lg-6">
          <div class="row">
            <div class="element-container">
              <h5 class="mt-5 text-muted">Want to add a Note?</h5>
              <h6 class="text-muted">Enter your note here.</h6>
              <input
                type="text"
                class="form-control mt-4"
                id="fullname"
                v-model="data.title"
                placeholder="Enter your title"
              />
              <textarea
                class="form-control mt-2"
                placeholder="Enter your notes."
                id="exampleFormControlTextarea1"
                v-model="data.note"
                rows="7"
              ></textarea>
              <div class="row justify-content-end mr-2">
                <button
                  class="btn btn-login mt-4 mr-1"
                  @click.prevent="cancelEdit"
                  v-if="status == 'edit'"
                >
                  Cancel
                </button>
                <button class="btn btn-login mt-4" @click.prevent="saveNote">
                  {{
                    status == "save"
                      ? isLoading
                        ? "Saving ..."
                        : "Save"
                      : isLoading
                      ? "Updating ..."
                      : "Update"
                  }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="noteModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                {{ modal.title }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {{ modal.content }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Confirm Delete
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this note?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                @click.prevent="deleteNote"
                class="btn btn-danger btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="archiveModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Confirm Note</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure you want to move this note to archived?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                @click.prevent="archiveNote"
                class="btn btn-success"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--- UNARCHIVED --->
      <div
        class="modal fade"
        id="unarchiveModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Confirm Note</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure you want to unarchive this note?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                @click.prevent="unarchiveNote"
                class="btn btn-success"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
export default {
  components: {
    BounceLoader,
  },
  async mounted() {
    this.checkToken();
    this.getNotes();
  },
  data() {
    return {
      user: {
        id: localStorage.getItem("userid"),
        name: localStorage.getItem("username"),
      },
      data: {
        noteid: "",
        title: "",
        note: "",
        id: localStorage.getItem("userid"),
      },
      notes: [],
      modal: {
        title: "",
        content: "",
      },
      deleteid: "",
      archiveid: "",
      status: "save",
      isLoading: false,
      isAddNote: false,
      isArchived: false,
      total: 3,
    };
  },
  methods: {
    async checkToken() {
      this.isLoading = true
      const res = await this.callApi(
        "post",
        `api/auth/me?token=${this.$store.state.token}`
      );
      if (res.status == 201) {
        localStorage.removeItem("auth");
        localStorage.setItem("auth", res.data.newToken);
        console.log(res.data.newToken);
        this.isLoading = false
        this.$router.go();
      } else if (res.status !== 200) {
        this.isLoading = false
        this.$router.push("/");
      }
    },
    async saveNote() {
      this.isLoading = true
      if (this.status == "save") {
        const res = await this.callApi(
          "post",
          `api/note/store?token=${this.$store.state.token}`,
          this.data
        );
        if (res.status == 200) {
          this.success("Note Created Successfully!");
          this.data.title = "";
          this.data.note = "";
          this.isAddNote = false;
          this.isLoading = false
          this.getNotes();
        }
      } else if (this.status == "edit") {
        const res = await this.callApi(
          "put",
          `api/note/put?token=${this.$store.state.token}`,
          this.data
        );
        if (res.status == 200) {
          this.success("Note Updated successfully!");
          this.data.noteid = "";
          this.data.note = "";
          this.data.title = "";
          this.status = "save";
          this.isLoading = false;
          this.getNotes();
        }
        this.isLoading = false;
      }
    },
    async getNotes(page = 1) {
      this.isLoading = true
      const res = await this.callApi(
        "get",
        `api/note/get?token=${this.$store.state.token}&&page=${page}&&total=${this.total}`
      );
      if (res.status == 200) {
        this.isLoading = false
        this.notes = res.data;
        this.isArchived = false;
      }
      this.isLoading = false
    },
    showNote(note) {
      this.modal.title = note.title;
      this.modal.content = note.content;
      $("#noteModal").modal("show");
    },
    showDeleteModal(note) {
      this.deleteid = note.id;
      $("#deleteModal").modal("show");
    },
    async deleteNote() {
      this.isLoading = true
      const res = await this.callApi(
        "delete",
        `api/note/delete?token=${this.$store.state.token}&&id=${this.deleteid}`
      );
      if (res.status == 200) {
        this.success("Note was deleted successfully");
        $("#deleteModal").modal("hide");
        this.isLoading = false
        this.getNotes();
      } else {
        this.warning("Something went wrong");
        this.isLoading = false
        $("#deleteModal").modal("hide");
      }
    },
    showAddModal() {},
    editNote(note) {
      this.data.noteid = note.id;
      this.data.note = note.content;
      this.data.title = note.title;

      this.status = "edit";
    },
    editMobileNote(note) {
      this.data.noteid = note.id;
      this.data.note = note.content;
      this.data.title = note.title;
      this.isAddNote = true;
      this.status = "edit";
    },
    cancelEdit() {
      this.data.noteid = "";
      this.data.note = "";
      this.data.title = "";
      this.status = "save";
      this.isAddNote = false;
    },
    async getArchived(page = 1) {
      this.isArchived = true;
      this.data.noteid = "";
      this.data.note = "";
      this.data.title = "";
      this.status = "save";
      this.isAddNote = false;
      this.isLoading = true
      const res = await this.callApi(
        "get",
        `api/note/getArchived?token=${this.$store.state.token}&&page=${page}&&total=${this.total}`
      );
      if (res.status == 200) {
        this.notes = res.data;
        this.isLoading = false
      }
      else{
        this.isLoading = false
      }
    },
    async archiveNote() {
      this.isLoading = true
      const res = await this.callApi(
        "put",
        `api/note/addArchived?token=${this.$store.state.token}&&id=${this.archiveid}`
      );
      if (res.status == 200) {
        this.notes = res.data;
        this.getNotes();
        this.isLoading = false
        $("#archiveModal").modal("hide");
        this.success("Note moved to archived");
      }
      this.archiveid = "";
      this.isLoading = false
    },
    async unarchiveNote() {
      this.isLoading = true
      const res = await this.callApi(
        "put",
        `api/note/unarchive?token=${this.$store.state.token}&&id=${this.archiveid}`
      );
      if (res.status == 200) {
        $("#unarchiveModal").modal("hide");
        this.isLoading = false
        this.success("Note status changed to unarchived");
        this.getArchived();
      }
      this.archiveid = "";
    },
    setArchiveID(note) {
      this.archiveid = note.id;
      $("#archiveModal").modal("show");
    },
    removeArchived(note) {
      this.archiveid = note.id;
      $("#unarchiveModal").modal("show");
    },
    totalChange(event) {
      this.total = event.target.value;
      if (!this.isArchived) {
        this.getNotes();
      } else {
        this.getArchived();
      }
    },
    async logout() {
      this.isLoading = true
      const res = await this.callApi("post", "api/auth/logout", {
        token: this.$store.state.token,
      });
      if (res.status == 200) {
        this.isLoading = false
        this.$store.commit("clearToken");
        localStorage.removeItem("username");
        localStorage.removeItem("userid");
        this.$router.push("/");
      }
      this.isLoading = false
    },
  },
  computed: {},
};
</script>
<style >
.btn-login {
  background: rgba(74, 71, 250);
  color: white;
}
.btn-login:hover {
  color: rgb(15, 228, 228);
  background: rgb(84, 82, 245);
}
.form-control {
  border: 1px solid rgba(74, 71, 250) !important;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: rgba(74, 71, 250) !important;
  border-color: rgb(84, 81, 241) !important;
}

.element-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
}

.archive {
  position: absolute;
  margin-top: -6%;
  right: 0;
  margin-right: 40%;
  cursor: pointer;
}

.page-item.active .page-link {
  color: #fff !important;
}

.loader {
  width: 100%;
  position: fixed;
  height: 100vh;
  background: rgba(255, 255, 255, 0.87);
  top:0;
  left: 0;
  z-index: 25;
}

.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
