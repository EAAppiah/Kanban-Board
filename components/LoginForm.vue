<template >
  <div class="container mx-auto">
    <form class="mx-auto max-w-sm mt-10" action="#" method="post">
      <img src="" alt="">
      <h4 class="text-center text-2xl font-bold mb-5">SIRCLE OS</h4>

      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
        <input type="email" id="username" class="mt-1 p-2 w-full border rounded-md" aria-describedby="emailHelp">
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" id="password" class="mt-1 p-2 w-full border rounded-md">
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
    </form>
  </div>
</template>