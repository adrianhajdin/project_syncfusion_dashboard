from flask import Flask
from customer_api import customers_bp
from employee_api import employees_bp
from kanban_api import kanban_bp
from orders_api import orders_bp
from schedule_api import schedules_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(customers_bp)
app.register_blueprint(employees_bp)
app.register_blueprint(kanban_bp)
app.register_blueprint(orders_bp)
app.register_blueprint(schedules_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
