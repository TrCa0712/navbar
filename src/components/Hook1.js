import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const Hook1 = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger">Danger!</Button> <br/>

            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Thông tin khách hàng</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label
                                for="exampleEmail" hidden>Nhập Tên</Label>
                            <Input id="exampleEmail" name="email" placeholder="Nhập tên" type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="exampleEmail" hidden>SĐT</Label>
                            <Input id="exampleEmail" name="email" placeholder="Nhập SĐT" type="text" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Mua Ngay
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Hook1;
