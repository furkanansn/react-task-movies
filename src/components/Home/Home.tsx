import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';
import '../../common/loader.scss';
import './Home.scss';
import { moviesGet, selectLoading, selectAllMovies, selectMoviesCount } from '../../features/movies/moviesSlice';
import { RootState } from '../../features/store';

const mapStateToProps = (state: RootState) => ({
    loading: selectLoading(state),
    movies: selectAllMovies(state),
    moviesCount: selectMoviesCount(state),
});

const mapDispatchToProps = {
    moviesGet,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface HomeState {
    currentPage: number;
}

class Home extends Component<PropsFromRedux, HomeState> {
    state: HomeState = {
        currentPage: 1,
    };

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps: PropsFromRedux, prevState: HomeState) {
        if (prevState.currentPage !== this.state.currentPage) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        const { currentPage } = this.state;
        const { moviesGet } = this.props;
        const itemsPerPage = 10;
        const offset = (currentPage - 1) * itemsPerPage;
        void moviesGet({ limit: itemsPerPage, offset });

    };

    handlePageChange = (newPage: number) => {
        this.setState({ currentPage: newPage });
    };

    render() {
        const { loading, movies, moviesCount } = this.props;
        const { currentPage } = this.state;
        const itemsPerPage = 10;

        return (
            <>
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <MovieListing
                        currentPage={currentPage}
                        totalPages={Math.ceil(moviesCount / itemsPerPage)}
                        onPageChange={this.handlePageChange}
                        movies={movies}
                    />
                )}
            </>
        );
    }
}

export default connector(Home);
