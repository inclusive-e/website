const Loading = () => {
  return (
    <div className="flex space-x-3 rounded-full justify-center items-center">
      <div class="dark:bg-d-accent p-1 rounded-full animate-ping circle-one"></div>
      <div class="dark:bg-d-accent p-1 rounded-full animate-ping circle-two"></div>
      <div class="dark:bg-d-accent p-1 rounded-full animate-ping circle-three"></div>
    </div>
  )
}

export default Loading