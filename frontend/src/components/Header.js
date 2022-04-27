import React from 'react'

const Header = () => {
  return (
    <header>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <div>
            <h1 class='text-muted py-0'>Animation </h1>
          </div>
          <div class='collapse navbar-collapse' id='navbarColor03'>
            <ul class='navbar-nav me-auto'></ul>
            <form class='d-flex'>
              <button class='btn btn-outline-info' type='button'>
                Follow
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
