<template>
    <div class="product-list">
        <div class="pb-3 text-center">
            <h1>User Management</h1>
            <router-link to="/user/create">Add new</router-link>
        </div>

        <div class="container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob2</td>
                        <td>Thornton2</td>
                        <td>@fat2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>