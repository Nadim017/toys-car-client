import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto my-5">
      <h3 className="text-2xl mb-2 font-bold">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h3>
      <p className="text-xl">
        <span className="font-bold">Ans : </span>An access token is a credential
        that represents the authorization granted to a client application to
        access protected resources on behalf of a user. It is typically issued
        by an authentication server (such as OAuth) after the user has
        successfully authenticated. A refresh token, on the other hand, is a
        credential used to obtain a new access token without requiring the user
        to reauthenticate. It is usually issued alongside the access token and
        has a longer expiration time. Access tokens are short-lived and have a
        limited lifespan, while refresh tokens are long-lived and can be used to
        obtain new access tokens whenever needed. On the client-side, access
        tokens and refresh tokens should be stored securely. They should be kept
        in a location that is not accessible to malicious actors, such as in an
        encrypted storage mechanism or a secure cookie. It is important to
        follow best practices for client-side token storage to prevent
        unauthorized access and mitigate the risk of token leakage.
      </p>
      <br />
      <h3 className="text-2xl mb-2 font-bold">
        2. Compare SQL and NoSQL databases?
      </h3>
      <p className="text-xl">
        <span className="font-bold">Ans : </span> <br /> SQL databases: <br />*
        Follow a relational data model with tables, rows, and columns. <br />*
        Have predefined schemas. <br />* Support ACID (Atomicity, Consistency,
        Isolation, Durability) properties. <br />* Provide strong consistency. *
        Suitable for complex queries and transactions. Examples: MySQL,
        PostgreSQL, Oracle.
        <br />
        NoSQL databases: <br />
        *Embrace various data models like key-value, document, columnar, and
        graph. <br />* Have flexible schemas or no schemas at all. <br />*
        Sacrifice ACID properties for scalability and performance. <br />*
        Provide eventual consistency or relaxed consistency models. <br />*
        Suited for large-scale, distributed systems and unstructured data.
        Examples: MongoDB, Cassandra, Redis, Neo4j.
      </p>
      <br />
      <h3 className="text-2xl mb-2 font-bold">
        3. What is express js? What is Nest JS?
      </h3>
      <p className="text-xl">
        <span className="font-bold">Ans : </span>Express.js is a minimalistic
        and flexible web application framework for Node.js. It provides a robust
        set of features for building web applications and APIs. Express.js
        simplifies the process of handling HTTP requests, routing, middleware
        integration, and other common web development tasks. It is known for its
        simplicity and lightweight nature, allowing developers to quickly create
        server-side applications. <br />
        NestJS, on the other hand, is a progressive, TypeScript-based web
        framework for building scalable and maintainable server-side
        applications. It is built on top of Express.js and adds additional
        features and architectural patterns inspired by Angular. NestJS
        leverages decorators, dependency injection, and modules to structure and
        organize the application. It provides a highly modular and extensible
        environment for building enterprise-grade applications.
        <br />
        NestJS incorporates powerful features such as declarative routing,
        dependency injection, middleware support, validation, and more. It aims
        to enhance developer productivity and maintainability by promoting code
        reusability and following established design principles like SOLID.
      </p>
      <br />
      <h3 className="text-2xl mb-2 font-bold">
        4. What is MongoDB aggregate and how does it work ?
      </h3>
      <p className="text-xl">
        <span className="font-bold">Ans : </span>
        In MongoDB, the aggregate framework is a powerful tool used for
        performing advanced data processing and analysis operations on the data
        stored in a collection. It allows you to perform complex queries,
        transformations, and aggregations on the documents in a collection. The
        aggregate framework works by chaining multiple stages together to form a
        pipeline. Each stage performs a specific operation on the documents, and
        the output of one stage serves as the input for the next stage. The
        pipeline stages can include operations such as filtering, grouping,
        sorting, projecting, joining, and calculating aggregations. The stages
        in the pipeline are executed in the order they are specified, allowing
        you to shape and transform the data according to your requirements. The
        output of the last stage in the pipeline is the result of the aggregate
        operation. The aggregation framework provides a rich set of operators
        and expressions that can be used within the stages to perform a wide
        range of data manipulations and computations. It allows you to perform
        complex data analysis tasks efficiently and flexibly. Overall, the
        aggregate framework in MongoDB provides a powerful way to query and
        process data, enabling you to perform advanced operations and obtain
        meaningful insights from your collections.
      </p>
      <br />
    </div>
  );
};

export default Blog;
