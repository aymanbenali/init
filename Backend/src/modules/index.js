import testRoutes from './test1/routes';

export default (app) => {
    app.use('/test', testRoutes);
}