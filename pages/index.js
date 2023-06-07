import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>Welcome to </title>
      </Head>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              Welcome
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Buy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  order
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New work shop
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="ค้นหา"
                aria-label="ค้นหา"
              />
              <button className="btn btn-outline-success" type="submit">
                ค้นหา
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <Image
          src="/unnamed.png"
          className="rounded"
          alt="unnamed"
          width={200}
          height={200}
        />
      </div>
      <div className="text-center">
        <button type="button" class="btn btn-outline-info">
          Buy here
        </button>
      </div>
    </>
  );
}
