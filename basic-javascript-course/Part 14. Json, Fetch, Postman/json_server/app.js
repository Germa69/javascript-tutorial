/**
 * - REST API: Là tiêu chuẩn áp dụng rộng rãi
 * - JSON Server: API Server (Fake) / Mock API
 * - CRUD:
 *   + Create: Tạo mới     -> POST         |
 *   + Read: Lấy dữ liệu   -> GET          | __> Phương thức 
 *   + Update: Chỉnh sửa   -> PUT / PATCH  |
 *   + Delete: Xóa         -> DELETE       |
 * - HTTP (giao thức): Truyền tải dữ liệu qua Internet
 */

// renderCourse là function được truyền dưới dạng callback và được gọi khi thằng fetch được API fetch được courses và gọi ngược lại thằng renderCourse

// var listCouresBlock = document.querySelector('#list-courses');

var courseAPI = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// Function

function getCourses(callback) {
    fetch(courseAPI)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function createCourse (data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(courseAPI, options)
        .then ((response) => {
            return response.json();
        })
        .then(callback);
}

function updateCourse (id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(courseAPI + '/' + id, options) 
        .then ((response) => {
            return response.json();
        })
        .then(callback);
    
}

function handleUpdateCourse (id) {
    var name = document.querySelector('#h4-name-'+id).innerText;
    var description = document.querySelector('#p-description-'+id).innerText;

    var nameInput = document.querySelector('input[name="name"]');
    nameInput.setAttribute('value', name)
    var descriptionInput = document.querySelector('input[name="description"]');
    descriptionInput.setAttribute('value', description)

    var hideCreateButton = document.querySelector('#create');

    if(hideCreateButton) {
        hideCreateButton.setAttribute('hidden', 'true');
    }

    var buttonUpdate = document.querySelector('#event')
    buttonUpdate.innerHTML = ` <button id="update">Update</button>`

    var updateBtn = document.querySelector('#update');

    updateBtn.onclick = function() {
        var formData = {
            name: nameInput.value,
            description: descriptionInput.value
        }

        updateCourse(id, formData, function() {
            getCourses(renderCourses);
        });

    }
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseAPI + '/' + id, options)
        .then ((response) => {
            return response.json();
        })
        .then(function () {
            // getCourses(renderCourses);

            var courseItem = document.querySelector('.course-item-'+id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function renderCourses (courses) {
    var listCouresBlock = document.querySelector('#list-courses');

    var htmls = courses.map((course) => {
        return `<li class="course-item-${course.id}">
            <h4 id="h4-name-${course.id}">${course.name}</h4>
            <p id="p-description-${course.id}">${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
        </li>`;
    });

    listCouresBlock.innerHTML = htmls.join('');
}

function handleCreateForm () {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description,
        }
        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    }
}


