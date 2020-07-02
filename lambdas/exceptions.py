class RepositoryException(Exception):
    pass


class DatabaseError(RepositoryException):
    pass


class InvalidDataError(RepositoryException):
    pass
