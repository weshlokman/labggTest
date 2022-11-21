import crmController from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get(crmController.getContacts)
        .post(crmController.addnewContact)

    app.route('/contact/:firstName/nanme')
        .put(crmController.changeContact)
        .get(crmController.getSingleContact)
        .delete(crmController.deleteContact) 
}

export default routes;







