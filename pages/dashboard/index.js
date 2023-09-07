import { useSession, signIn, signOut } from "next-auth/react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch('https://frontend-theta-rust.vercel.app/api/users');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const Swal = require('sweetalert2')
  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpneUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "ลบพ่องตาย",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (result.isConfirmed) {
      // Perform the deletion using fetch
      await fetch('https://frontend-theta-rust.vercel.app/api/users?id=' + id, {
        method: 'DELETE',
      });
  
      // Reload the page
      router.reload('/dashboard');
  
      // Show success message
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }
  };

  const { data: session } = useSession();
  if(session){
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {session ? (
              <div>
                <IconButton onClick={handleOpneUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={session.user.email} src={session.user.avatar} />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography onClick={() => signOut()} textAlign="center">
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
            ) : 
              <Button onClick={() => signIn()} color="inherit">
                Login
              </Button>
            }
            
          </Toolbar>
        </AppBar>

        <div className="card border-success mb-5 ">
          <div class="card-header text-center">User</div>
          <div className="container">
            <div className="row"></div>
            <div align="right">
              {" "}
              <Link href ="./dashboard/user/add">
              <button className="btn btn-outline-success">Add Data</button>{" "}
              </Link>
              {/* ปุ่ม Delete */}{" "}
            </div>
            <br></br>
            <div className="row">
              <div className="col">
                <table className="table table-hover">
                  <thead>
                    <tr className="bg-warning">
                      <th>No</th>
                      <th>Student ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>User</th>
                      <th>Password</th>
                      <th>status</th>
                      <th>Action</th> {/* เพิ่มคอลัมน์ Action */}
                    </tr>
                  </thead>
                  <tbody>
                    {posts.users.map((post, i) => (
                      <tr key={post.id}>
                        <td>{i + 1}</td>
                        <td>{post.studentid}</td>
                        <td>{post.firstname}</td>
                        <td>{post.lastname}</td>
                        <td>{post.username}</td>
                        <td>{post.password}</td>
                        <td>{post.status}</td>
                        <td>
                        <Link href={`/dashboard/user/edit/${post.id}`} ><button className="btn btn-outline-warning"> Edit</button></Link>{/* ปุ่ม Edit */}
                          <button className="btn btn-outline-danger"onClick={() => handleDelete(post.id)}>Delete</button>{/* ปุ่ม Delete */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
                    }

                    return(
                      <>
<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
              <div>
              <Button onClick={() => signIn()} color="inherit">
                Login
              </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={() => signIn()} color="inherit">
                Login
              </Button>
                  </MenuItem>
                </Menu>
              </div>       
          </Toolbar>
        </AppBar>
        </Box>
                  </>
                    )
}
